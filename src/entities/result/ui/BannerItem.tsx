import DownloadIcon from '@/shared/assets/icons/download.svg?react'
import { Stage, Layer, Image, Text } from 'react-konva';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { loadImage } from '@/shared/lib/image-loader';
import { handleImageError, showSuccess } from '@/shared/lib/toast';
import { 
  calculateImageScale, 
  calculatePromoDimensions, 
  getTargetSize, 
  prepareContextsForHQ,
  createDataURL,
  MAX_EXPORT_RATIO
} from '@/shared/lib/konva-utils';

interface BannerItemProps {
  id: string;
  title: string;
  image?: {
    url: string;
    alt?: string;
    responsiveImage?: {
      width: number;
      height: number;
    };
  };
  promocode: string;
  onStageRef: (id: string, ref: any) => void;
}

export const BannerItem = ({ 
  id, 
  title, 
  image, 
  promocode, 
  onStageRef 
}: BannerItemProps) => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [imageScale, setImageScale] = useState({ scaleX: 1, scaleY: 1, x: 0, y: 0 });
  const [stageSize, setStageSize] = useState(400);
  const [promoDims, setPromoDims] = useState({ w: 0, h: 0 });

  const stageRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const promoTextRef = useRef<any>(null);

  const { promoFontSize, bottomPad } = calculatePromoDimensions(stageSize);

  // Обновление размера stage при изменении размера контейнера
  useEffect(() => {
    const updateStageSize = () => {
      if (containerRef.current) {
        setStageSize(containerRef.current.offsetWidth);
      }
    };
    
    updateStageSize();
    const timeout = setTimeout(updateStageSize, 100);
    window.addEventListener('resize', updateStageSize);
    
    return () => {
      window.removeEventListener('resize', updateStageSize);
      clearTimeout(timeout);
    };
  }, []);

  // Загрузка изображения
  useEffect(() => {
    if (image?.url) {
      const loadImageAsync = async () => {
        try {
          const img = await loadImage(image.url);
          setImageElement(img);
        } catch (error) {
          console.error('Failed to load image:', image.url, error);
          handleImageError(error, image.url);
        }
      };
      
      loadImageAsync();
    }
  }, [image?.url]);

  // Пересчет масштаба изображения
  useEffect(() => {
    if (imageElement && stageSize > 0) {
      const scale = calculateImageScale(imageElement, stageSize);
      setImageScale(scale);
    }
  }, [imageElement, stageSize]);

  // Регистрация stage ref
  useEffect(() => {
    if (stageRef.current) {
      onStageRef(id, stageRef.current);
    }
  }, [id, onStageRef]);

  // Обновление размеров промокода
  useLayoutEffect(() => {
    if (!promoTextRef.current) return;
    
    const node = promoTextRef.current as any;
    node.fontSize(promoFontSize);
    node.text(promocode || '');
    
    const w = node.width();
    const h = node.height();
    setPromoDims({ w, h });
    
    node.getLayer()?.batchDraw();
  }, [promocode, promoFontSize]);

  const handleDownload = () => {
    if (!stageRef.current) return;

    prepareContextsForHQ(stageRef.current);

    const { w: targetW } = getTargetSize(imageElement, image?.responsiveImage);
    const pixelRatio = Math.max(1, Math.min(MAX_EXPORT_RATIO, targetW / stageSize));

    const dataURL = createDataURL(stageRef.current, pixelRatio);

    const link = document.createElement('a');
    link.download = `${title}-banner.png`;
    link.href = dataURL;
    link.click();
    
    showSuccess(`Banner "${title}" downloaded successfully!`);
  };

  return (
    <div ref={containerRef} className="relative aspect-square w-full">
      <Stage 
        ref={stageRef} 
        width={stageSize} 
        height={stageSize} 
        className="w-full h-full rounded-2xl overflow-hidden"
      >
        <Layer>
          {imageElement && (
            <Image
              image={imageElement}
              x={imageScale.x}
              y={imageScale.y}
              scaleX={imageScale.scaleX}
              scaleY={imageScale.scaleY}
            />
          )}

          {promocode && (
            <Text
              ref={promoTextRef}
              text={promocode}
              x={stageSize / 2}
              y={stageSize - bottomPad - promoDims.h}
              fontSize={promoFontSize}
              fontFamily='Montserrat'
              fontStyle="800"
              fill="#000"
              align="center"
              offsetX={promoDims.w / 2}
              offsetY={0}
            />
          )}
        </Layer>
      </Stage>

      <button
        type="button"
        className="absolute right-4 top-4 p-1.5 border-none outline-0 bg-green-100 rounded-xl hover:bg-green-200 transition-colors"
        aria-label={`Download banner for ${title}`}
        onClick={handleDownload}
      >
        <DownloadIcon className="w-12 h-12" />
      </button>
    </div>
  );
};

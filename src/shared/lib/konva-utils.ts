/**
 * Утилиты для работы с Konva
 */

export const BASE_SIZE = 1080;
export const PROMO_FONT_BASE = 50;
export const BOTTOM_PAD_BASE = 15;
export const MAX_EXPORT_RATIO = 12;

/**
 * Подготавливает контексты для высокого качества рендеринга
 */
export const prepareContextsForHQ = (stageRef: any) => {
  const layers = stageRef?.getLayers?.() ?? [];
  layers.forEach((l: any) => {
    const ctx = l.getContext()._context as CanvasRenderingContext2D;
    ctx.imageSmoothingEnabled = true;
    (ctx as any).imageSmoothingQuality = 'high';
  });
};

/**
 * Вычисляет размеры изображения для адаптивного отображения
 */
export const calculateImageScale = (
  image: HTMLImageElement,
  stageSize: number
) => {
  const imgWidth = image.width;
  const imgHeight = image.height;
  const scale = Math.min(stageSize / imgWidth, stageSize / imgHeight);
  const scaledWidth = imgWidth * scale;
  const scaledHeight = imgHeight * scale;
  const x = (stageSize - scaledWidth) / 2;
  const y = (stageSize - scaledHeight) / 2;
  
  return { scaleX: scale, scaleY: scale, x, y };
};

/**
 * Вычисляет пропорциональные размеры для промокода
 */
export const calculatePromoDimensions = (stageSize: number) => {
  const promoFontSize = Math.max(1, Math.round(stageSize * (PROMO_FONT_BASE / BASE_SIZE)));
  const bottomPad = Math.round(stageSize * (BOTTOM_PAD_BASE / BASE_SIZE));
  
  return { promoFontSize, bottomPad };
};

/**
 * Получает целевой размер для экспорта
 */
export const getTargetSize = (
  image: HTMLImageElement | null,
  responsiveImage?: { width: number; height: number }
) => {
  const propW = responsiveImage?.width;
  const propH = responsiveImage?.height;

  const natW = image?.width;
  const natH = image?.height;

  const w = propW ?? natW ?? BASE_SIZE;
  const h = propH ?? natH ?? BASE_SIZE;

  return { w, h };
};

/**
 * Создает dataURL с fallback для Safari
 */
export const createDataURL = (stageRef: any, pixelRatio: number) => {
  try {
    return stageRef.toDataURL({
      pixelRatio,
      mimeType: 'image/png',
      quality: 1,
    });
  } catch (error) {
    console.warn('Safari fallback for toDataURL:', error);
    return stageRef.toDataURL();
  }
};

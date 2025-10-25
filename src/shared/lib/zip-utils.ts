/**
 * Утилиты для работы с ZIP архивами
 */

import JSZip from 'jszip';
import { BASE_SIZE, createDataURL } from './konva-utils';
import { handleDownloadError, showSuccess } from './toast';

interface BannerItem {
  id: string;
  title: string;
  image?: {
    responsiveImage?: {
      width: number;
      height: number;
    };
  };
}

/**
 * Создает ZIP архив со всеми баннерами
 */
export const createBannersZip = async (
  data: BannerItem[],
  stageRefs: { [key: string]: any }
): Promise<void> => {
  if (data.length === 0) return;

  const zip = new JSZip();

  try {
    const promises = data.map(async (item, index) => {
      const stageRef = stageRefs[item.id];
      if (!stageRef) return;

      const propW = item.image?.responsiveImage?.width;
      const fallback = BASE_SIZE;
      const targetW = propW ?? fallback;
      const pixelRatio = Math.max(1, Math.min(16, targetW / stageRef.width()));

      const dataURL = createDataURL(stageRef, pixelRatio);
      const base64Data = dataURL.split(',')[1];
      const fileName = `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}_${index + 1}.png`;
      zip.file(fileName, base64Data, { base64: true });
    });

    await Promise.all(promises);

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `casino-banners-${new Date().toISOString().split('T')[0]}.zip`;
    link.click();
    URL.revokeObjectURL(url);

    showSuccess(`All ${data.length} banners downloaded successfully!`);
  } catch (error) {
    console.error('Error creating zip:', error);
    handleDownloadError(error, 'banners archive');
    throw error;
  }
};

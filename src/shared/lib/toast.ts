import { toast } from 'react-toastify'

/**
 * Утилиты для показа уведомлений через react-toastify
 */

export const showError = (message: string, error?: any) => {
  console.error('API Error:', message, error)
  
  let errorMessage = message
  
  // Обрабатываем различные типы ошибок
  if (error?.message) {
    errorMessage = `${message}: ${error.message}`
  } else if (error?.graphQLErrors?.length > 0) {
    errorMessage = `${message}: ${error.graphQLErrors[0].message}`
  } else if (error?.networkError) {
    errorMessage = `${message}: Network error`
  } else if (typeof error === 'string') {
    errorMessage = `${message}: ${error}`
  }
  
  toast.error(errorMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

export const showSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

export const showWarning = (message: string) => {
  toast.warning(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

export const showInfo = (message: string) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

/**
 * Обработчик ошибок GraphQL
 */
export const handleGraphQLError = (error: any, context: string = 'API') => {
  if (error?.graphQLErrors?.length > 0) {
    const graphQLError = error.graphQLErrors[0]
    showError(`${context} Error`, graphQLError.message)
  } else if (error?.networkError) {
    showError(`${context} Network Error`, 'Please check your internet connection')
  } else if (error?.message) {
    showError(`${context} Error`, error.message)
  } else {
    showError(`${context} Error`, 'An unexpected error occurred')
  }
}

/**
 * Обработчик ошибок загрузки изображений
 */
export const handleImageError = (error: any, imageUrl?: string) => {
  console.error('Image loading error:', error, imageUrl)
  showWarning(`Failed to load image${imageUrl ? `: ${imageUrl}` : ''}`)
}

/**
 * Обработчик ошибок скачивания
 */
export const handleDownloadError = (error: any, filename?: string) => {
  console.error('Download error:', error, filename)
  showError(`Failed to download${filename ? ` ${filename}` : ' file'}`)
}

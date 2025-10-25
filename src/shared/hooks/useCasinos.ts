import React from 'react'
import { useQuery } from '@apollo/client/react'
import { GET_CASINOS } from '@/shared/lib/graphql/queries'
import { useAppStore } from '@/shared/store'
import { handleGraphQLError } from '@/shared/lib/toast'

interface Casino {
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
}

interface GetCasinosResponse {
  allCasinos: Casino[];
}

export function useCasinos() {
  const { setCasinos, setLoading, setError, selectedCategory, selectedLocation } = useAppStore()
  
  const { data, loading, error, refetch } = useQuery<GetCasinosResponse>(GET_CASINOS, {
    variables: {
      ...(selectedCategory && { category: selectedCategory }),
      ...(selectedLocation && { location: selectedLocation }),
      first: 500
    }
  })

  React.useEffect(() => {
    setLoading(loading)
  }, [loading, setLoading])

  React.useEffect(() => {
    if (data) {
      setCasinos(data.allCasinos || [])
    }
  }, [data, setCasinos])

  React.useEffect(() => {
    if (error) {
      setError(error.message)
      handleGraphQLError(error, 'Casinos')
    }
  }, [error, setError])

  return {
    casinos: data?.allCasinos || [],
    loading,
    error,
    refetch,
  }
}

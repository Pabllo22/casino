import { ApolloProvider } from './apollo/ApolloProvider'
import AppRouterProvider from './router'

interface ProvidersProps {
  children?: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider>
      <AppRouterProvider />
      {children}
    </ApolloProvider>
  )
}

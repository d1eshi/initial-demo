import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  const { asPath } = useRouter()

  return (
    <MainLayout>
      <h2>Princing Page</h2>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing <code className={'code'}>pages{asPath}/index.js</code>
      </p>
    </MainLayout>
  )
}


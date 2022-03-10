import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { DarkLayout } from '../components/layouts/DarkLatout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  const { asPath } = useRouter()

  return (
    <>
      <h2>About Page</h2>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing <code className={'code'}>pages{asPath}.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}

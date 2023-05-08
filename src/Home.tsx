import { Pagination } from 'antd'
import { FC, ReactNode, memo } from 'react'
import { useTranslation } from 'react-i18next'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('home.message')}</div>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </>
  )
})

export default Home


import { Button, ConfigProvider } from 'antd'
import { Locale } from 'antd/es/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { FC, ReactNode, createContext, memo, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import i18n from './language'
import Router from './routers'

interface IProps {
  children?: ReactNode
}

export const LanguageContext = createContext('')

const App: FC<IProps> = memo(() => {
  // 根据需要选择store(Redux、Mobox、Zustand)替换language
  const [language, setLanguage] = useState('zh')
  const [locale, setLocale] = useState<Locale>(zhCN)

  const setAntdLanguage = (language: string) => {
    // language可能初始值设置为'',根据自己需求
    if (language && language == 'zh') return setLocale(zhCN)
    if (language && language == 'en') return setLocale(enUS)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
    setAntdLanguage(language)
    setLanguage(language)
  }, [language])

  return (
    <BrowserRouter>
      <ConfigProvider locale={locale}>
        <Router />
      </ConfigProvider>
      <Button onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}>切换语言</Button>
    </BrowserRouter>
  )
})

export default App


import { useMediaQuery, useTheme } from '@mui/material'

const useScreenSize = () => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'))
  const isDesktop = useMediaQuery(theme.breakpoints.between('sm', 'lg'))
  const isLarger = useMediaQuery(theme.breakpoints.up('lg'))

  return { isMobile, isTablet, isDesktop, isLarger }
}

export default useScreenSize

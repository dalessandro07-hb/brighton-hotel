import HeroSection from '@/app/components/hero/HeroSection'
import MainPageContainer from '@/app/components/layout/MainPageContainer'
import RoomContainer from '@/app/components/rooms/RoomContainer'

export default function Home () {
  return (
    <MainPageContainer withoutHeader>
      {/* Hero Section */}
      <HeroSection />
      {/* Habitaciones */}
      <RoomContainer />
    </MainPageContainer>
  )
}

import React, { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const EventPage = lazy(() => import('./pages/EventPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'))
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'))
const CoursePage = lazy(() => import('./pages/CoursesPage'))
const CourseDetails = lazy(() => import('./pages/CoursesDetail'))
const SampleCmsHomePage = lazy(() => import('./pages/SampleCmsHomePage'))
const PlacementPage = lazy(() => import('./pages/PlacementPage'))
const CmsPreviewPage = lazy(() => import('./pages/CmsPreviewPage'))

const PageLoader = () => (
  <div className="flex min-h-[60vh] w-full items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#9B251E] border-t-transparent" />
  </div>
)

export default function PublicRoutes() {
  const { search } = useLocation()
  const isEmbedPreview = new URLSearchParams(search).get('embed') === '1'

  return (
    <div
      className={
        isEmbedPreview
          ? 'relative overflow-x-hidden'
          : 'relative flex min-h-screen flex-col overflow-x-hidden'
      }
    >
      <div className={isEmbedPreview ? '' : 'flex-grow'}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preview/home" element={<SampleCmsHomePage />} />
            <Route path="/preview/:pageId" element={<CmsPreviewPage />} />
            <Route path="/placements" element={<PlacementPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blogdetails" element={<BlogDetailPage />} />
            <Route path="/eventdetails" element={<EventDetailPage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/coursesdetails" element={<CourseDetails />} />
          </Routes>
        </Suspense>
      </div>
      {!isEmbedPreview && <Footer />}
    </div>
  )
}

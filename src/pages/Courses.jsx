import React from 'react'
import PageHeader from '../components/RouterSection'
import CourseSection from '../components/CourseSection'
import ScrollToTopButton from '../components/ScrollToTopButton '

const Courses = () => {
  return (
    <>
    <PageHeader title="Courses"  />
    <CourseSection/>
    <ScrollToTopButton />
    </>
  )
}

export default Courses
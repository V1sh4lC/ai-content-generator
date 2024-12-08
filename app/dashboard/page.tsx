import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  return (
    <div>
      {/* search header */}
      <SearchSection />
      {/* template lists */}
      <TemplateListSection />
    </div>
  )
}

export default Dashboard
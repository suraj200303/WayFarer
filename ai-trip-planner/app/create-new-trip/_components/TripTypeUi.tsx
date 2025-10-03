import React from 'react'

export const TripTypeList = [
  {
    id: 1,
    title: 'Business Trip',
    desc: 'Travel for work, meetings, or conferences',
    icon: '💼',
  },
  {
    id: 2,
    title: 'Office Retreat',
    desc: 'Corporate outing or team retreat',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Personal Vacation',
    desc: 'Leisure trip for couples, family, or friends',
    icon: '🌴',
  },
]

const TripTypeUi = ({ onSelectedOption }: any) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-3 gap-2 items-center mt-1'>
      {TripTypeList.map((item, index) => (
        <div
          key={index}
          className='p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer flex flex-col items-center text-center'
          onClick={() => onSelectedOption(item.title)}
        >
          <h2 className='text-3xl p-3 rounded-full'>{item.icon}</h2>
          <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
          <h2 className='text-sm text-gray-500'>{item.desc}</h2>
        </div>
      ))}
    </div>
  )
}

export default TripTypeUi

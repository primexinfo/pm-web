import React from 'react'
// import Contact from './Contact'
// import Navbar from './Navbar'


const ServicePage = () => {
  return (
    <>
   <div id='Prices'>
    <div  className="ml-24 mt-20 max-w-6xl relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="text-2xl px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Product name
                </th>
                <th scope="col" className="text-2xl px-6 py-3  text-orange-500">
                    Description
                </th>
                <th scope="col" className="text-2xl px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Category
                </th>
                <th scope="col" className="text-2xl px-6 py-3 text-orange-500">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                EC MANAGER
                </th>
                <td className="px-6 py-4">
                Basic ecommerce website
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </td>
                <td className="px-6 py-4 text-2xl">
                $500
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                EC MANAGER PRO
                </th>
                <td className="px-6 py-4">
                Full ecommerce solution
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </td>
                <td className="px-6 py-4 text-2xl">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                EC MANAGER ++
                </th>
                <td className="px-6 py-4">
                ecommerce website with android and IOS
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </td>
                <td className="px-6 py-4 text-2xl">
                    $2000
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                EC RIDER
                </th>
                <td className="px-6 py-4">
                Ride share app
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                User Experience, Visual Design
                </td>
                <td className="px-6 py-4 text-2xl">
                    $1000
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                EC RIDER PRO
                </th>
                <td className="px-6 py-4">
                Ride share app with android and IOS
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                User Experience, Visual Design
                </td>
                <td className="px-6 py-4 text-2xl">
                    $1599
                </td>
            </tr>
        </tbody>
    </table>
</div>
   </div>
    


    </>
   


  )
}

export default ServicePage
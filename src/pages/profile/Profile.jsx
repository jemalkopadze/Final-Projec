import React, { useContext } from 'react'
import { UserDataContext } from 'global/context/UserDataContext'
import { StaticDataContext } from 'global/context/StaticDataContext'
import { Sidebar } from 'components'


export const Profile = () => {
    const { translate } = useContext(StaticDataContext);
    const { userInfo } = useContext(UserDataContext)


    return (
        <div className='flex justify-center'>
            <Sidebar />
            <div className="w-full h[100%] bg-white overflow-hidden shadow border text-center">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {translate.profileMenu.title}
                    </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <div className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <div className="text-sm font-medium text-gray-500">
                                {translate.profilePage.fullname}
                            </div>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userInfo?.name.firstname}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {translate.profilePage.lastname}
                            </div>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userInfo?.name.lastname}
                            </div>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <div className="text-sm font-medium text-gray-500">
                                {translate.profilePage.email}
                            </div>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userInfo?.email}
                            </div>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <div className="text-sm font-medium text-gray-500">
                                {translate.profilePage.phone}
                            </div>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userInfo?.phone}
                            </div>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <div className="text-sm font-medium text-gray-500">
                                {translate.profilePage.address}
                            </div>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userInfo?.address.city} {userInfo?.address.number} {userInfo?.address.street} {userInfo?.address.zipcode}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
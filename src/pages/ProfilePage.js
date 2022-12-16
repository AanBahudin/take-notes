import React, { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { useNotesContext } from "../context/noteContext";
import {EditProfileModal, ChangePasswordModal, DeleteAccountModal, Loading} from '../components'

const Profile = () => {
    const {loading, warning, success, getUserProfile, userProfile} = useAuthContext()
    const {showChangePasswordModal, showChangeProfileModal, showDeleteAccountModal, changePasswordModal, editProfileModal, showDeleteAccountModalFunc} = useNotesContext()

    useEffect(() => {
        getUserProfile()
    }, [])

    if(loading) {
        return (
            <div className="flex mt-[12%] items-center justify-center my-auto">
                <Loading />
            </div>
        )
    }

    return (
        <div className="min-h-[100vh] w-1/2 mx-auto h-fit p-10">
            <section className="flex flex-col mt-[20%]">

                <h1 className="mx-auto pl-3 text-primary dark:text-darkPrimary duration-200  font-fredokaOne font-light text-2xl uppercase">Profile Information</h1>

                {success ? <h1 className="text-center text-secondary dark:text-darkSecondary duration-200 text-md mt-3">Wait for Updating...</h1> : null}
                {warning ? <h1 className="text-center text-secondary text-md mt-3">Invalid Password, Try Again Using Valid Password</h1> : null}
                <div className="mt-[5%] w-[60%] mx-auto">
                    {Object.keys(userProfile).map((key, index) => {
                        return (
                            <h1 key={index} className="my-auto mb-[3%] duration-200  text-primary dark:text-darkPrimary font-lexend grid grid-cols-3 gap-0 text-xl">{key.toLocaleLowerCase()}
                            <span className="w-[5%] ">:</span> 
                            <span className="text-secondary duration-200 dark:text-darkSecondary">{userProfile[key]}</span>
                            </h1> 
                        )
                    })}
                </div>

                <section className="flex flex-row justify-between items-stretch">
                    <button onClick={() => editProfileModal(true)} className="mt-8 bg-primary dark:bg-cardDark dark:border-none duration-200 mx-auto text-white dark:text-darkSecondary border-[1px] text-lg uppercase font-lexend rounded hover:bg-thirdly tracking-wider px-4 py-1 border-white">Edit Profile</button>
                    <button onClick={() => changePasswordModal(true)} className="mt-8  bg-primary dark:bg-cardDark dark:border-none duration-200 w-[30%] mx-auto text-white dark:text-darkSecondary border-[1px] text-lg uppercase font-lexend rounded hover:bg-thirdly tracking-wider px-4 py-1 border-white">Change Password</button>
                    <button onClick={() => showDeleteAccountModalFunc(true)} className="mt-8 bg-primary dark:bg-cardDark dark:border-none duration-200 w-[30%] mx-auto text-white dark:text-darkSecondary border-[1px] text-lg uppercase font-lexend rounded hover:bg-thirdly tracking-wider px-4 py-1 border-white">Delete Account</button>
                </section>

                {showChangeProfileModal ? <EditProfileModal {...userProfile}/> : null}
                {showChangePasswordModal ? <ChangePasswordModal {...userProfile} /> : null}
                {showDeleteAccountModal ? <DeleteAccountModal /> : null}
            </section>

        </div>
    )
}

export default Profile
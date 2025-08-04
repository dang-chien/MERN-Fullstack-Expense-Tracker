import { useState, useEffect } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Input from "../../components/Inputs/Input";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import CharAvatar from "../../components/Cards/CharAvatar";
import Textarea from "../../components/Inputs/Textarea";
import SettingButton from "../../components/Profile/SettingButton";

const Profile = () => {
    useUserAuth();

    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUserProfile = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
            if (response.data) {
                setUserProfile(response.data);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateProfile = async () => { };

    const handleClearAllTransactions = async () => { };

    const handleDeleteAccount = async () => { };

    const handleContactSupport = async () => { };

    useEffect(() => {
        fetchUserProfile();
        return () => { };
    }, []);

    return (
        <DashboardLayout activeMenu="Profile">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card flex items-center justify-between flex-col">
                        <div className="flex flex-col items-center justify-center gap-3 my-3">
                            {userProfile?.profileImageUrl ? (
                                <img
                                    src={userProfile?.profileImageUrl}
                                    alt="Profile"
                                    className="w-50 h-50 bg-state-400 rounded-full"
                                />) : (
                                <CharAvatar
                                    fullName={userProfile?.fullName}
                                    width="w-50"
                                    height="h-50"
                                    style="text-8xl"
                                />
                            )}
                        </div>

                        <div className="w-full">
                            <Textarea
                                label="Bio"
                                value={userProfile?.bio || "N/A"}
                                placeholder="Write something about yourself..."
                                allowInput={false}
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center w-full gap-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                                <SettingButton
                                    text="Update Profile"
                                    onClick={handleUpdateProfile}
                                    color="primary"
                                />
                                <SettingButton
                                    text="Clear All Transactions"
                                    onClick={handleClearAllTransactions}
                                    color="warning"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                                <SettingButton
                                    text="Delete Account"
                                    onClick={handleDeleteAccount}
                                    color="error"
                                />
                                <SettingButton
                                    text="Contact Support"
                                    onClick={handleContactSupport}
                                    color="success"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <Input label="Fullname" type="text" placeholder={userProfile?.fullName || 'N/A'} allowInput={false} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Gender" type="text" placeholder={userProfile?.gender || 'N/A'} allowInput={false} />
                            <Input label="Date of Birth" type="date" placeholder={userProfile?.dob || 'N/A'} allowInput={false} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Email" type="email" placeholder={userProfile?.email || 'N/A'} allowInput={false} />
                            <Input label="Phone" type="tel" placeholder={userProfile?.phone || 'N/A'} allowInput={false} />
                        </div>
                        <Input label="Address" type="text" placeholder={userProfile?.address || 'N/A'} allowInput={false} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="City" type="text" placeholder={userProfile?.city || 'N/A'} allowInput={false} />
                            <Input label="State" type="text" placeholder={userProfile?.state || 'N/A'} allowInput={false} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Country" type="text" placeholder={userProfile?.country || 'N/A'} allowInput={false} />
                            <Input label="Zip Code" type="text" placeholder={userProfile?.zip || 'N/A'} allowInput={false} />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout >
    );
}

export default Profile;

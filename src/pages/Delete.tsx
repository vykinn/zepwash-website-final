import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Trash2, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";


const DeleteAccount = () => {
  return (
    <>
   
     <Navbar/>
    <div className=" min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <div className="text-center mt-[-6.5rem] pt-[8.5rem] pb-12 md:pb-16 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-green-500">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Delete Your ZepWash Account
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          We're sorry to see you go. You can request the permanent deletion of your ZepWash account and associated data.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-8">
        
        {/* Steps Section */}
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How to Request Deletion</h2>
        </div>

        <div className="flex justify-center mb-16 md:mb-20">
            <Card className="w-full max-w-lg bg-white rounded-2xl shadow-lg border-0 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send an Email Request</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Email us at <strong>support@zepwash.com</strong> from your registered email address with the subject line <strong>"Delete My Account"</strong>.
                </p>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3 text-base font-semibold transition-all w-full sm:w-auto"
                  onClick={() => window.open('mailto:support@zepwash.com?subject=Delete%20My%20Account', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </Button>
              </CardContent>
            </Card>
        </div>

        {/* Data Information Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Happens to Your Data?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency is important to us. Here's what data will be deleted and what may be retained temporarily for legal reasons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-20">
          <Card className="bg-white rounded-2xl shadow-lg border-0 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data That Will Be Deleted</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-gray-600">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  Account details (name, email, phone)
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  Vehicle and subscription details
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  Wash history and preferences
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg border-0 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Retained Temporarily</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-lg text-gray-600">
                  <div className="w-2.5 h-2.5 bg-amber-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Payment and invoice records</p>
                    <p className="text-base text-gray-500 mt-1">
                      Kept securely for up to 1 year for tax and legal compliance requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Warning Section */}
        <Card className="bg-red-50 rounded-2xl shadow-lg border border-red-100 p-6 sm:p-8 mb-12 md:mb-16">
          <CardContent className="p-0">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:space-x-6">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">Important Notice</h3>
                <p className="text-lg text-red-800 leading-relaxed">
                  Once your deletion request is processed, your account will be <strong>permanently deleted</strong>, and you will lose access to any active subscriptions. This action cannot be undone.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-white rounded-2xl shadow-lg border-0 p-8 sm:p-12 text-center">
          <CardContent className="p-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              If you have any questions, feel free to reach out to our support team.
            </p>
            <div className="inline-flex items-center justify-center space-x-4 bg-gray-100 p-3 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-lg font-semibold text-blue-600">support@zepwash.com</span>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
    </>
  );
};

export default DeleteAccount;

import React from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { LogOut, AlertCircle } from "lucide-react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
}

export const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Logout",
}: LogoutModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl text-red-600">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertCircle className="w-6 h-6" />
          </div>
          <p className="font-medium text-sm">
            Are you sure you want to log out? You will need to sign in again to
            access your dashboard.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="ghost" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            className="flex-1 bg-red-600 hover:bg-red-700 border-none text-white gap-2"
            onClick={onConfirm}
          >
            <LogOut className="w-4 h-4" /> Yes, Log Out
          </Button>
        </div>
      </div>
    </Modal>
  );
};

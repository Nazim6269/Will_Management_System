import React from "react";
import { Paperclip, Smile, Send } from "lucide-react";
import GenericButton from "@/components/atoms/GenericButton";
import TopicGrid from "./TopicGrid";

const MessagingInterface = () => {
  return (
    <div className="w-full max-w-4xl bg-blue10 rounded-3xl border border-blue16 p-4 sm:p-8 font-plus-jakarta shadow-2xl mt-6">
      <div className="mb-4.5">
        <h2 className="text-blueF0 text-base font-bold mb-2.5">
          Send a Message
        </h2>
        <p className="text-blue46 text-sm">
          Choose a topic and send a message to your will writer.
        </p>
      </div>
      <TopicGrid />

      <div className="mb-8">
        <h3 className="text-blue46 text-xs font-medium uppercase tracking-[1.5px] mb-3">
          Previous Messages
        </h3>

        <div className="space-y-8">
          <div className="flex flex-col items-start max-w-[80%]">
            <span className="text-blue85 text-xs font-bold mb-2">
              James Thornton
            </span>
            <div className="bg-blue16 p-4 rounded-2xl rounded-tl-none border border-borderColor/18">
              <p className="text-[#BFB7DB] text-sm leading-relaxed">
                Hi Sarah! Your will has been completed and is now available in
                your portal. Please review it and let me know if you have any
                questions or would like any changes. 😊
              </p>
              <span className="text-blue46 text-xs mt-2 block">
                27 Mar 2026, 4:02 PM
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end ml-auto max-w-[80%]">
            <div className="message-bg p-3 rounded-2xl rounded-tr-none ">
              <p className="text-white text-sm leading-relaxed">
                Thank you James! I'll take a look and get back to you if I have
                any questions.
              </p>
              <span className="text-blue85 text-xs mt-2 block text-right">
                27 Mar 2026, 5:15 PM
              </span>
            </div>
            <span className="text-blue70 text-xs font-bold mt-2">You</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-blue46 text-xs font-bold uppercase tracking-widest mb-2">
          New Message
        </h3>
        <div className="bg-blue10 border border-blue16 rounded-2xl overflow-hidden focus-within:border-blue66 transition-colors">
          <textarea
            placeholder="Type your message to James Thornton..."
            className="w-full bg-transparent p-5 text-blueF0 text-sm outline-none resize-none min-h-[120px] placeholder:text-blue46"
          />
          <div className="p-4 border-t border-blue16 flex items-center justify-between bg-blue14/50">
            <div className="flex gap-2">
              <button className="p-2 text-blue70 hover:text-white transition-colors border border-blue16 rounded-lg">
                <Paperclip size={18} />
              </button>
              <button className="p-2 text-blue70 hover:text-white transition-colors border border-blue16 rounded-lg">
                <Smile size={18} />
              </button>
            </div>

            <GenericButton
              title="Send message"
              variant={"primary"}
              className="button-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingInterface;

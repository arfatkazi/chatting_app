import React from "react"
import Messages from "./Messages"
import MessagesInput from "./MessagesInput"
import { TbMessagePlus } from "react-icons/tb"

const NoChatSelected = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p className="">ChatApp for EveryBody</p>
				<p>select a chat to start messaging</p>
				<TbMessagePlus className="mt-5" />
			</div>
		</div>
	)
}

const MessageContainer = () => {
	const isNoChatSelected = true
	return (
		<div className="md:min-w-[75vw] flex flex-col">
			{isNoChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">To: </span>
						<span className="text-gray-900 font-bold ml-1">Furkan</span>
					</div>
					<Messages />
					<MessagesInput />
				</>
			)}
		</div>
	)
}

export default MessageContainer

import { SiZeromq} from "react-icons/si";
import { FcLowPriority,FcMediumPriority,FcHighPriority, FcTodoList,FcApproval, FcProcess} from "react-icons/fc";
import { TbUrgent} from "react-icons/tb";
import { FiAlertOctagon } from "react-icons/fi";

export default function NewHeader({ grp }) {
	return (
		<>
			{grp === "No priority" && (
				<span>
					<SiZeromq />
				</span>
			)}
			{grp === "Low" && (
				<span>
					<FcLowPriority />
				</span>
			)}
			{grp === "Medium" && (
				<span>
					<FcMediumPriority />
				</span>
			)}
			{grp === "High" && (
				<span>
					<FcHighPriority color = "red" />
				</span>
			)}
			{grp === "Urgent" && (
				<span>
					< TbUrgent  color = "red" />
				</span>
			)}
			{grp === "Todo" && (
				<span>
					<FcTodoList />
				</span>
			)}
			{grp === "done" && (
				<span>
					<FcApproval />
				</span>
			)}
			{grp === "Backlog" && (
				<span>
					<FiAlertOctagon />{" "}
				</span>
			)}
			{grp === "In progress" && (
				<span>
					<FcProcess />
				</span>
			)}
		</>
	);
}

import { useState } from "react";
import BtnSectionPart from "./BtnSectionPart";
import Comment from "./Comment";

export default function Caption({ data }) {
	const [commentSection, setCommentSection] = useState(false);
	const [productSpecification, setProductSpecification] = useState(true);

	const clickHandler = () => {
		setCommentSection(!commentSection);
		setProductSpecification(!productSpecification);
	};

	return (
		<div className={`my-14`}>
			<div className="flex justify-center items-center">
				<BtnSectionPart
					textInner={"نظرات"}
					isActive={commentSection}
					clickHandler={clickHandler}
				/>
				<BtnSectionPart
					textInner={"مشخصات"}
					isActive={productSpecification}
					clickHandler={clickHandler}
				/>
			</div>

			{/* جدا کننده */}
			<section className="w-full h-0.5 bg-slate-200"></section>

			{/* بخش نطرات و مشخصات */}
			{commentSection ? (
				<Comment />
			) : (
				<p className="font-peyda mt-4 text-justify leading-[2.5em]">
					{data.description}
				</p>
			)}
		</div>
	);
}

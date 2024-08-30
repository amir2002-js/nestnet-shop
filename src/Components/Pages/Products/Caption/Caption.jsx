import { useState } from "react";
import BtnSectionPart from "./BtnSectionPart";

export default function Caption() {
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
			<section className="w-full h-0.5 bg-slate-200"></section>
		</div>
	);
}

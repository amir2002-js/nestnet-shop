function Feature({title , caption , icon}) {
    return (
        <div className={`flex flex-col justify-center items-center gap-1`}>
            {icon}
            <p className={`w-28 text-center text-[14px]`}>{title}</p>
            <figcaption className={`text-[11px]`}>
                {caption}
            </figcaption>
        </div>
    );
}

export default Feature;
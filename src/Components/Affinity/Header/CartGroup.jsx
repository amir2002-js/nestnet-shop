function CartGroup({dataFiltered}) { //گرفتن داده فیلتر شده

    return (
        <div className={`flex justify-center items-center gap-5 rounded-2xl border w-60 px-5`}>
            <div>
                <img src={dataFiltered.url} alt={"product img"} className={`w-24`}/>
            </div>
            <div>
                <p className={`line-clamp-1`}>
                    {dataFiltered.name}
                </p>
                <p>
                    {dataFiltered.price}
                </p>
            </div>
        </div>
    );
}

export default CartGroup;
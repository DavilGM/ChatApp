const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-gray-300">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox ml-2 checkbox-primary" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-gray-300">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox ml-2 checkbox-primary" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox
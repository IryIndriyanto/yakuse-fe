interface RedTitleFormProps {
    title: string;
}

const RedTitleForm = ({title}: RedTitleFormProps) => {
    return (
        <div>
            <p className="text-[14px] text-[#FA657D]">{title}</p>
        </div>
    )
}

export default RedTitleForm;
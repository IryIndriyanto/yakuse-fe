import EditPermintaanForm from "@/components/EditPermintaanForm";

const EditPermintaan = ({ params }: { params: { needId: string } }) => {
    const { needId } = params;

    return (
        <div>
            <EditPermintaanForm needId={needId} />
        </div>
    )
}

export default EditPermintaan;
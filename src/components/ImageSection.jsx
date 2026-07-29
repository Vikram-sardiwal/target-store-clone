export default function ImageSection({id,image}){
    return(
        <>
<div className="h-full object-cover p-3 m-3 ">
    <img src={image} alt="" />
</div>
        </>
    );
}
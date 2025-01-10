

function CommonForm({handleSubmit}){
 return (

     <form onSubmit={handleSubmit}>
        <Button type="submit">{buttonText || "Submit"}</Button>
     </form>
 )
}

export default CommonForm;


function FormControls({FormControls,}){
   
    function renderCompoentByType(control){
            switch(control.type){
                case "text":
                    return <Input {...control} />
            }

            switch(control.type){
                case "password":
                    return <Input {...control} />
            }

            switch(control.type){
                case "email":
                    return <Input {...control} />
            }

    }


    return (
       <div className="flex flex-col gap-2">
        {FormControls.map((control)=>(
            <control.componentInput key={control.name} {...control} />
        ))}
       </div>
    )
}   

export default FormControls;
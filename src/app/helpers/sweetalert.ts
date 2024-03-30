import swal from 'sweetalert2';


export const successAlert = (title: string, textMessage: string) => {
    swal.fire({
        title: title,
        text: textMessage,
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn btn-fill btn-success",
        },
        icon: "success"
    })

}




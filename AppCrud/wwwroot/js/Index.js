
const _modeloEmpleado = {
    idEmpleado: 0,
    nombreCompleto: "",
    idDepartamento: 0,
    sueldo: 0,
    fechaContrato: ""
}

function MostrarEmpleados() {
    fetch("/Home/listaEmpleados")
        .then(response => {
            return response.ok ? response.json() : Promise.reject(response)
        })
        .then(responseJson => {
            if (responseJson.length > 0) {

                $("#tablaEmpleados tbody").html("");

                responseJson.forEach((empleado) => {
                    $("#tablaEmpleados tbody").append(
                        $("<tr>").append(
                            $("<td>").text(empleado.nombreCompleto),
                            $("<td>").text(empleado.refDepartamento.nombre),
                            $("<td>").text(empleado.sueldo),
                            $("<td>").text(empleado.fechaContrato),
                            $("<td>").append(
                                $("<button>").addClass("btn btn-primary btn-sm boton-editar-empleado").text("Editar").data("dataEmpleado", empleado),
                                $("<button>").addClass("btn btn-danger btn-sm ms-2 boton-eliminar-empleado").text("Eliminar").data("dataEmpleado", empleado),
                            )
                            )
                        )
                })
            }


        })
}



document.addEventListener("DOMContentLoaded", function () {

    MostrarEmpleados();

    fetch("/Home/listaEmpleados")
        .then(Response => {
            return response.ok ? response.json() : Promise.reject(response)
        })
        .then(responseJson => {
            if (responseJson > 0) {
                responseJson.forEach((item) => {

                    $("#cboDepartamento").append(
                        $("<option>").val(item.idDepartamento).text(item.nombre)
                        )
                })
            }
        })

    $("#txtFechaContrato").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighLight: true
        })

}, false)


function MostrarModal() {

    $("#txtNombreCompleto").val(_modeloEmpleado.nombreCompleto);
    $("#cboDepartamento").val(_modeloEmpleado.idDepartamento == 0 ? $("#cboDepartamento option:first").val() : _modeloEmpleado.idDepartamento)
    $("#txtSueldo").val(_modeloEmpleado.sueldo);
    $("#txtFechaContrato").val(_modeloEmpleado.fechaContrato)

    $("#modalEmpleado").modal("show");
}

$(document).on("click", ".boton-nuevo-empleado", function () {

    _modeloEmpleado.idEmpleado = 0;
    _modeloEmpleado.nombreCompleto = "";
    _modeloEmpleado.idDepartamento = 0;
    _modeloEmpleado.sueldo = 0;
    _modeloEmpleado.fechaContrato = "";

    MostrarModal();
})
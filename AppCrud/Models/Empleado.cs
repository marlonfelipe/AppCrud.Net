namespace AppCrud.Models
{
    public class Empleado
    {
        internal int idEmpleado;

        public int IdEmpleado { get; set; }
        public string nombreCompleto { get; set; }
        public Departamento refDepartamento { get; set; }
        public int sueldo { get; set; }
        public string fechaContrato { get; set; }

    }
}

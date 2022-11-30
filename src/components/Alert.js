import Swal from 'sweetalert2';

export function Alert(title, content, type) {
  return Swal.fire(title, content, type);
}

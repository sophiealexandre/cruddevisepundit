var ready = function() {
 $('#products').DataTable({
  "columnDefs": [
     { "width": "19%", className: "dt-body-center", "targets": -1 },
     { "width": "10%", "targets": 0 },
     { "width": "7%", "targets": 1 },
     { "width": "20%", "targets": 2 },
     { "width": "20%", "targets": 3 },
    ]
   });
}
$(document).ready(ready);
$(document).on('page:load', ready);

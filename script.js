// On ready
$(document).ready(function() {

  // Set up our dropzone
  $('#in_available_fields').sortable({
    connectWith: '.sortable-list',
    placeholder: 'placeholder',
    start: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(".primaryPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(".secondaryPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      if (!$(ui.item).hasClass("allowExport")) {
        $(".exportPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      checkFields()
    },
    stop: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(".primaryPanel").removeClass("panel-danger").addClass('panel-primary');
      }
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(".secondaryPanel").removeClass("panel-danger").addClass('panel-primary');
      }
      if (!$(ui.item).hasClass("allowExport")) {
        $(".exportPanel").removeClass("panel-danger").addClass('panel-primary');
      }
    },
    change: function(event, ui) {
      checkFields();
    },
    update: function(event, ui) {
      checkFields();
    },
    out: function(event, ui) {
      checkFields();
    }
  }).disableSelection();

  // Enable dropzone for primary fields
  $('.primaryDropzone').sortable({
    connectWith: '.sortable-list',
    placeholder: 'placeholder',
    receive: function(event, ui) {
      // If we dont allow primary fields here, cancel
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(ui.placeholder).css('display', 'none');
        $(ui.sender).sortable("cancel");
      }
    },
    over: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(ui.placeholder).css('display', 'none');
      } else {
        $(ui.placeholder).css('display', '');
      }
    },
    start: function(event, ui) {
      checkFields()
    },
    change: function(event, ui) {
      checkFields();
    },
    update: function(event, ui) {
      checkFields();
    },
    out: function(event, ui) {
      checkFields();
    }
  }).disableSelection();

  // Enable dropzone for secondary fields
  $('.secondaryDropzone').sortable({
    connectWith: '.sortable-list',
    placeholder: 'placeholder',
    receive: function(event, ui) {
      // If we dont allow secondary fields here, cancel
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(ui.sender).sortable("cancel");
      }
    },
    over: function(event, ui) {
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(ui.placeholder).css('display', 'none');
      } else {
        $(ui.placeholder).css('display', '');
      }
      checkFields();
    },
    start: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(".primaryPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(".secondaryPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      if (!$(ui.item).hasClass("allowExport")) {
        $(".exportPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      checkFields();
    },
    stop: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(".primaryPanel").removeClass("panel-danger").addClass('panel-primary');
      }
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(".secondaryPanel").removeClass("panel-danger").addClass('panel-primary');
      }
      if (!$(ui.item).hasClass("allowExport")) {
        $(".exportPanel").removeClass("panel-danger").addClass('panel-primary');
      }
    },
    change: function(event, ui) {
      checkFields();
    },
    update: function(event, ui) {
      checkFields();
    },
    out: function(event, ui) {
      checkFields();
    }
  }).disableSelection();

  // Enable dropzone for export fields
  $('.exportDropzone').sortable({
    connectWith: '.sortable-list',
    placeholder: 'placeholder',
    receive: function(event, ui) {
      // If we dont allow export fields here, cancel
      if (!$(ui.item).hasClass("allowExport")) {
        $(ui.sender).sortable("cancel");
      }
      checkFields();
    },
    over: function(event, ui) {
      if (!$(ui.item).hasClass("allowExport")) {
        $(ui.placeholder).css('display', 'none');
      } else {
        $(ui.placeholder).css('display', '');
      }
      checkFields();
    },
    start: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(".primaryPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(".secondaryPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      if (!$(ui.item).hasClass("allowExport")) {
        $(".exportPanel").removeClass('panel-primary').addClass("panel-danger");
      }
      checkFields()
    },
    stop: function(event, ui) {
      if (!$(ui.item).hasClass("allowPrimary")) {
        $(".primaryPanel").removeClass("panel-danger").addClass('panel-primary');
      }
      if (!$(ui.item).hasClass("allowSecondary")) {
        $(".secondaryPanel").removeClass("panel-danger").addClass('panel-primary');
      }
      if (!$(ui.item).hasClass("allowExport")) {
        $(".exportPanel").removeClass("panel-danger").addClass('panel-primary');
      }
    },
    change: function(event, ui) {
      checkFields();
    },
    update: function(event, ui) {
      checkFields();
    },
    out: function(event, ui) {
      checkFields();
    }
  }).disableSelection();

});

// Checks to see if the fields section has fields selected. If not, shows a placeholder
function checkFields() {
  if ($('[name=in_primary_fields] li').length >= 1) {
    $('.primaryPanel').find('.alert').hide();
  } else {
    $('.primaryPanel').find('.alert').show();
  }

  if ($('[name=in_secondary_fields] li').length >= 1) {
    $('.secondaryPanel').find('.alert').hide();
  } else {
    $('.secondaryPanel').find('.alert').show();
  }

  if ($('[name=in_export_fields] li').length >= 1) {
    $('.exportPanel').find('.alert').hide();
  } else {
    $('.exportPanel').find('.alert').show();
  }
}

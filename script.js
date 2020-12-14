(function ($) {
  $(document).ready(function () {
    // trigger add email template event
    $(".btn-add").click(function () {
      const subject = $(".subject").val();
      const content = $(".email-body").val();
      if (subject && content) {
        $(".list-container").append(
          `<li class="list-item">
            <span class="list-item__subject">${subject}</span>
            <i class="list-item__remove fa fa-times-circle"></i>
            <span type="text" class="list-item__email">${content}</span>
            <div class="list-item__confirm">
              <p>Are you sure?</p>
              <div class="confirm-container">
                <span class="confirm-yes"><i class="fa fa-check-circle"></i>Yes</span>
                <span class="confirm-no"><i class="fa fa-times-circle"></i>No</span>
              </div>
            </div>
          </li>`
        );
        $(".subject").val("");
        $(".email-body").val("");
      }
    });

    //trigger the 'remove the one list' event
    $(document).on("click", ".list-item__remove", function () {
      $(this)
        .closest(".list-item")
        .find(".list-item__confirm")
        .addClass("show");
    });

    //trigger the 'confirm remove' event
    $(document).on("click", ".confirm-yes", function () {
      $(this).closest(".list-item").remove();
      // $(this).parent().removeClass("show");
    });

    //trigger the 'confirm no remove' event
    $(document).on("click", ".confirm-no", function () {
      $(this)
        .closest(".list-item")
        .find(".list-item__confirm")
        .removeClass("show");
    });

    //trigger the 'show the content on the left part' event
    $(document).on("click", ".list-item__subject", function () {
      $(".subject").val(
        $(this).closest(".list-item").find(".list-item__subject")[0].innerHTML
      );
      $(".email-body").val(
        $(this).closest(".list-item").find(".list-item__email")[0].innerHTML
      );
    });

    //trigger the 'add text on the left input field' event
    $(".btn-text")
      .on("click", function () {})
      .on("mousedown", function (e) {
        e.preventDefault();
        const target = $(".main__left .focus:focus");
        const targetValue = target.val();
        target.val(targetValue + " " + $(this).text());
      });
  });
})(jQuery);

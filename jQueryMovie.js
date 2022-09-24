($ => {
  $('#movie-form').submit(e => {
    e.preventDefault();
    let movieInput = $("#movie-title").val();
    let ratingInput = $("#rating").val();
    $('#movie-list').append(`<li>${movieInput} ${ratingInput}<button>Remove</button></li>`);
  })

  $('ul').on("click", "li button", e => $(e.target).closest('li').remove());
});
const app = {
    data: {
        url: "http://localhost:3000/notes",
        notes: []
    },

    /* methods */
    getNotes: function() {
        let container = document.getElementById('container')
        fetch(this.data.url, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json())
        .then(response => {
            for (let note of response) {
                this.data.notes.push(note)
            };
            this.generateNotesHTML()
            }
            )
        },
            
    createNote: function(noteId) {
            let newTitle = document.getElementById("newTitle").value;
            let newBody = document.getElementById("newBody").value;
            let newNote = {
              title: /*title??*/,
              body: /*body??*/
          },
        
          displayCreateForm: function() {
            /*????*/
          },
        
          deleteNote: function(noteId) {
            fetch(this.data.url + noteId, {
              method: 'DELETE',
              headers: {"Content-Type": "application/json"}
            })
            .then(r => r.json())
            .then(response => {
              this.generateNotesHTML();
            })
            
          },
        
          confirmDelete: function() {
            let form = document.getElementById("editForm");
            /*more to add here*/
        },
        
          displayEditForm: function(note) {
            let form = document.getElementById('editForm');
            form.classList.remove('hidden')
          },
        
          generateNotesHTML: function() {
            const container = document.getElementById('container');
            for (let note of this.data.notes) {
              container.innerHTML += `
                <div class="noteCard">
                  <div>${note.title}</div>
                  <div>${note.body}</div>
                  <button data-id=${note.id}>EDIT</button>
                  <button class="deleteButton" data-id=${note.id}>DELETE</button>
                </div>
              `}
            this.addEventListeners();
          },
        
          addEventListeners: function() {
            let deleteButtons = document.querySelectorAll(".deleteButton");
            for (let button of deleteButtons) {
              button.addEventListener('click', (event) => {
                event.preventDefault();
                this.deleteNote(button.dataset.id);
              })
            }
          },
        
          main: function() {
           
            */
        
            this.getNotes();
            /*more to add here*/
          }
        }
        
        app.main()


class Button {
    constructor(elem) {
        this.elem = elem;
        this.role = this.elem.dataset.btn;

        if(this.role === 'all') {
            this.members = document.querySelectorAll('.team-member');
        } else {
            this.members = document.querySelectorAll(`.team-member[data-img="${this.role}"]`);
        }
        this.members = Array.from(this.members).map(el => new Team(el));

        this.elem.addEventListener('click', () => this.select())

    }

    select() {
        const buttonElems = document.querySelectorAll('.about-btn');
        buttonElems.forEach(el => el.classList.remove('active-btn'));

        const team = document.querySelectorAll('.team-member');
        team.forEach(el => el.style.display = 'none');

        this.elem.classList.add('active-btn')

        this.members.forEach(el => el.selectTeam())
    }
}

class Team {
    constructor(elem) {
        this.elem = elem;
    }

    selectTeam() {
        this.elem.style.display = 'flex';
    }
        
}



const buttons = document.querySelectorAll('.about-btn');
buttons.forEach(elem => new Button(elem))
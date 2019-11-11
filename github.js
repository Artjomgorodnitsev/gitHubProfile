class GitHub{
    constructor(){
        this.client_id='cd5d93cec0c05e8726bd';
        this.client_secret='e05f996c91f5f5f2023bc01ee95a13d0a2cce400';
        this.repos_count=5;
        this.repos_sort = 'created:asc';
        this.user='Artjomgorodnitsev';
    }

    //get a user info

    async getUserData(){
        let urlProfile = `http://api.github.com/${this.user}?client_id=${this.client_id}&client_secrt=${this.client_secret}`;
        let urlRepos = `http://api.github.com/${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&${this.client_id}&client_secrt=${this.client_secret}`;


        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);
    }

}
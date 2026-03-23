const translations = {
  en: {
    title: '360 Peer Feedback',
    subtitle: 'Confidential feedback form',
    langToggle: 'Suomeksi',
    reviewerSection: 'Your Information',
    reviewerName: 'Your name',
    reviewerEmail: 'Your email',
    revieweeName: 'Person you are reviewing',
    relationship: 'Your relationship',
    relationships: {
      manager: 'Manager',
      peer: 'Peer',
      direct_report: 'Direct Report',
      self: 'Self',
    },
    selectRelationship: 'Select relationship...',
    submit: 'Submit Feedback',
    submitting: 'Submitting...',
    successTitle: 'Thank you!',
    successMessage: 'Your feedback has been submitted successfully.',
    submitAnother: 'Submit another review',
    errorMessage: 'Something went wrong. Please try again.',
    required: 'Please fill in all required fields and rate at least one question per value.',
    openComment: 'Additional comments',
    openCommentPlaceholder: 'Share specific examples or additional thoughts...',
    confidentialNote: 'Your name is collected for data integrity but will only be visible to HR. The person being reviewed will see aggregated, anonymous results.',
    values: {
      outsmarting: {
        name: 'Outsmarting',
        description: 'Finding the smartest path, not the hardest one.',
        questions: [
          {
            id: 'outsmarting_1',
            text: 'Finds efficient solutions to complex problems',
            anchors: [
              'Rarely looks for alternatives; defaults to the most obvious approach',
              'Occasionally identifies a more efficient path when prompted',
              'Regularly evaluates options and chooses smart, practical solutions',
              'Proactively simplifies complexity and influences others to think smarter',
              'Consistently redefines how problems are approached; a go-to person for strategic thinking',
            ],
          },
          {
            id: 'outsmarting_2',
            text: 'Challenges assumptions and proposes better alternatives',
            anchors: [
              'Accepts the status quo without questioning',
              'Sometimes raises questions but rarely follows through with alternatives',
              'Constructively challenges assumptions and offers viable alternatives',
              'Frequently drives better outcomes by questioning established practices',
              'Creates a culture of smart questioning; inspires others to rethink fundamentals',
            ],
          },
        ],
      },
      innovation: {
        name: 'Innovation',
        description: 'Creating new value through bold ideas.',
        questions: [
          {
            id: 'innovation_1',
            text: 'Experiments with new ideas and approaches',
            anchors: [
              'Sticks to familiar methods; avoids trying new things',
              'Open to new ideas when suggested by others',
              'Actively experiments and learns from both successes and failures',
              'Regularly introduces novel approaches that improve outcomes',
              'Drives a culture of experimentation; turns bold ideas into real impact',
            ],
          },
          {
            id: 'innovation_2',
            text: 'Turns creative thinking into tangible results',
            anchors: [
              'Has ideas but rarely moves them beyond the concept stage',
              'Occasionally translates ideas into action with guidance',
              'Consistently moves from ideation to execution with clear outcomes',
              'Bridges creative thinking and delivery effectively; inspires follow-through',
              'Transforms innovative concepts into measurable business value repeatedly',
            ],
          },
        ],
      },
      discipline: {
        name: 'Discipline & Consistency',
        description: 'Reliable execution, every single time.',
        questions: [
          {
            id: 'discipline_1',
            text: 'Delivers on commitments reliably and on time',
            anchors: [
              'Frequently misses deadlines or delivers incomplete work',
              'Usually delivers but sometimes needs reminders or extensions',
              'Consistently meets commitments and communicates proactively about risks',
              'Highly dependable; others count on this person without hesitation',
              'Sets the standard for reliability; anticipates and prevents issues before they arise',
            ],
          },
          {
            id: 'discipline_2',
            text: 'Maintains high quality standards across all work',
            anchors: [
              'Quality is inconsistent; requires frequent corrections',
              'Meets minimum quality standards most of the time',
              'Produces consistently high-quality work with attention to detail',
              'Elevates quality standards for the team through example',
              'A benchmark for excellence; others model their work after this person',
            ],
          },
        ],
      },
      showUp: {
        name: 'Show Up',
        description: 'Being present, stepping up, having each other\'s backs.',
        questions: [
          {
            id: 'showup_1',
            text: 'Takes initiative without being asked',
            anchors: [
              'Waits to be told what to do; passive in most situations',
              'Takes initiative occasionally but mostly in familiar territory',
              'Proactively identifies needs and acts on them independently',
              'Anticipates challenges and mobilizes action before issues escalate',
              'A catalyst for action; inspires proactive behavior across the team',
            ],
          },
          {
            id: 'showup_2',
            text: 'Supports teammates and contributes to team success',
            anchors: [
              'Focuses primarily on own tasks; rarely offers help to others',
              'Helps when directly asked but doesn\'t actively seek ways to support',
              'Regularly offers support and contributes to a positive team dynamic',
              'Actively strengthens the team; goes out of their way to help others succeed',
              'The backbone of the team; creates an environment where everyone can thrive',
            ],
          },
        ],
      },
    },
  },
  fi: {
    title: '360-palautelomake',
    subtitle: 'Luottamuksellinen palautelomake',
    langToggle: 'In English',
    reviewerSection: 'Omat tietosi',
    reviewerName: 'Nimesi',
    reviewerEmail: 'Sähköpostisi',
    revieweeName: 'Arvioitava henkilö',
    relationship: 'Suhteesi arvioitavaan',
    relationships: {
      manager: 'Esimies',
      peer: 'Kollega',
      direct_report: 'Alainen',
      self: 'Itsearviointi',
    },
    selectRelationship: 'Valitse suhde...',
    submit: 'Lähetä palaute',
    submitting: 'Lähetetään...',
    successTitle: 'Kiitos!',
    successMessage: 'Palautteesi on lähetetty onnistuneesti.',
    submitAnother: 'Lähetä uusi arviointi',
    errorMessage: 'Jokin meni pieleen. Yritä uudelleen.',
    required: 'Täytä kaikki pakolliset kentät ja arvioi vähintään yksi kysymys per arvo.',
    openComment: 'Lisäkommentit',
    openCommentPlaceholder: 'Kerro konkreettisia esimerkkejä tai muita ajatuksia...',
    confidentialNote: 'Nimesi kerätään tiedon eheyden vuoksi, mutta se näkyy vain HR:lle. Arvioitava henkilö näkee vain koostetut, anonyymit tulokset.',
    values: {
      outsmarting: {
        name: 'Outsmarting',
        description: 'Älykkäin reitti, ei vaikein.',
        questions: [
          {
            id: 'outsmarting_1',
            text: 'Löytää tehokkaita ratkaisuja monimutkaisiin ongelmiin',
            anchors: [
              'Harvoin etsii vaihtoehtoja; turvautuu ilmeisimpään lähestymistapaan',
              'Tunnistaa toisinaan tehokkaamman tavan, kun siihen ohjataan',
              'Arvioi säännöllisesti vaihtoehtoja ja valitsee älykkäitä, käytännöllisiä ratkaisuja',
              'Yksinkertaistaa monimutkaisuutta ennakoivasti ja vaikuttaa muiden ajatteluun',
              'Määrittelee johdonmukaisesti uudelleen miten ongelmia lähestytään; strategisen ajattelun esikuva',
            ],
          },
          {
            id: 'outsmarting_2',
            text: 'Kyseenalaistaa oletuksia ja ehdottaa parempia vaihtoehtoja',
            anchors: [
              'Hyväksyy nykytilan kyseenalaistamatta',
              'Esittää toisinaan kysymyksiä mutta harvoin seuraa vaihtoehtojen kanssa',
              'Kyseenalaistaa rakentavasti oletuksia ja tarjoaa toteuttamiskelpoisia vaihtoehtoja',
              'Ajaa usein parempia tuloksia kyseenalaistamalla vakiintuneita käytäntöjä',
              'Luo älykkään kyseenalaistamisen kulttuurin; inspiroi muita ajattelemaan perusteita uudelleen',
            ],
          },
        ],
      },
      innovation: {
        name: 'Innovation',
        description: 'Uuden arvon luominen rohkeilla ideoilla.',
        questions: [
          {
            id: 'innovation_1',
            text: 'Kokeilee uusia ideoita ja lähestymistapoja',
            anchors: [
              'Pitäytyy tutuissa menetelmissä; välttää uuden kokeilemista',
              'Avoin uusille ideoille kun muut ehdottavat niitä',
              'Kokeilee aktiivisesti ja oppii sekä onnistumisista että epäonnistumisista',
              'Tuo säännöllisesti uusia lähestymistapoja jotka parantavat tuloksia',
              'Edistää kokeilukulttuurin syntymistä; muuttaa rohkeat ideat todelliseksi vaikutukseksi',
            ],
          },
          {
            id: 'innovation_2',
            text: 'Muuttaa luovan ajattelun konkreettisiksi tuloksiksi',
            anchors: [
              'Ideoi mutta harvoin vie ajatuksia konseptia pidemmälle',
              'Muuttaa toisinaan ideoita toiminnaksi ohjatusti',
              'Siirtyy johdonmukaisesti ideoinnista toteutukseen selkein tuloksin',
              'Yhdistää tehokkaasti luovan ajattelun ja toteutuksen; inspiroi seurantaa',
              'Muuntaa innovatiiviset konseptit mitattavaksi liiketoiminta-arvoksi toistuvasti',
            ],
          },
        ],
      },
      discipline: {
        name: 'Discipline & Consistency',
        description: 'Luotettavaa toteutusta, joka kerta.',
        questions: [
          {
            id: 'discipline_1',
            text: 'Toimittaa lupauksensa luotettavasti ja ajallaan',
            anchors: [
              'Myöhästyy usein aikatauluista tai toimittaa keskeneräistä työtä',
              'Toimittaa yleensä mutta tarvitsee toisinaan muistutuksia tai lisäaikaa',
              'Täyttää johdonmukaisesti sitoumuksensa ja viestii riskeistä ennakoivasti',
              'Erittäin luotettava; muut luottavat häneen epäröimättä',
              'Asettaa luotettavuuden standardin; ennakoi ja ehkäisee ongelmat ennen niiden syntymistä',
            ],
          },
          {
            id: 'discipline_2',
            text: 'Ylläpitää korkeaa laatutasoa kaikessa työssään',
            anchors: [
              'Laatu vaihtelee; vaatii usein korjauksia',
              'Täyttää vähimmäislaatuvaatimukset useimmiten',
              'Tuottaa johdonmukaisesti korkealaatuista työtä huolellisesti',
              'Nostaa tiimin laatutasoa omalla esimerkillään',
              'Erinomaisuuden mittapuu; muut mallintavat työtään hänen mukaansa',
            ],
          },
        ],
      },
      showUp: {
        name: 'Show Up',
        description: 'Läsnäoloa, aloitteellisuutta, toisten tukemista.',
        questions: [
          {
            id: 'showup_1',
            text: 'Tarttuu toimeen ilman pyytämistä',
            anchors: [
              'Odottaa ohjeita; passiivinen useimmissa tilanteissa',
              'Ottaa toisinaan aloitteen mutta lähinnä tutulla alueella',
              'Tunnistaa tarpeita ennakoivasti ja toimii itsenäisesti',
              'Ennakoi haasteet ja käynnistää toimet ennen ongelmien kärjistymistä',
              'Toiminnan katalysaattori; inspiroi ennakoivaa toimintaa koko tiimissä',
            ],
          },
          {
            id: 'showup_2',
            text: 'Tukee tiimitovereita ja edistää tiimin menestystä',
            anchors: [
              'Keskittyy pääasiassa omiin tehtäviinsä; tarjoaa harvoin apua muille',
              'Auttaa kun pyydetään suoraan mutta ei aktiivisesti etsi tukemisen tapoja',
              'Tarjoaa säännöllisesti tukea ja edistää positiivista tiimidynamiikkaa',
              'Vahvistaa aktiivisesti tiimiä; näkee vaivaa auttaakseen muita onnistumaan',
              'Tiimin selkäranka; luo ympäristön jossa jokainen voi kukoistaa',
            ],
          },
        ],
      },
    },
  },
}

export default translations

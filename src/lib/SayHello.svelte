<script lang="ts">
  // rune state for reactive state
  // rune state raw for reactive variable
  // let person : {
  //   firstName: string,
  //   lastName: string,
  // } = $state({
  //   firstName: '',
  //   lastName: '',
  // })
  let person : {
    firstName: string,
    lastName: string,
  } = $state.raw({
    firstName: '',
    lastName: '',
  })
  const sayHello = () => {
    person = {
      firstName: (document.getElementById('firstName') as HTMLInputElement)?.value || '',
      lastName: (document.getElementById('lastName') as HTMLInputElement)?.value || '',
    }
    // person.firstName = (document.getElementById('firstName') as HTMLInputElement)?.value || '';
    // person.lastName = (document.getElementById('lastName') as HTMLInputElement)?.value || '';
  }
</script>
<style>
  h3 {
    color: red;
  }
</style>

<input type="text" id="firstName" name="firstName" placeholder="Input firstname" /> 
<input type="text" id="lastName" name="lastName" placeholder="Input lastname"  />
<button onclick={sayHello}>Get Full Name</button>
<h3>Hello {person.firstName} {person.lastName}</h3>

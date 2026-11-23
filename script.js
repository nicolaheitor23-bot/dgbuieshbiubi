
const gabarito=[1,2,1];
const quiz=document.getElementById("quiz");
if(quiz){
 quiz.addEventListener("submit",e=>{e.preventDefault();let acertos=0;
  gabarito.forEach((g,n)=>{const r=quiz.querySelector(`input[name=q${n}]:checked`),fb=document.getElementById("fb"+n);
   if(!r){fb.textContent="Escolha uma alternativa.";fb.className="fb erro";return}
   const ok=+r.value===g;if(ok)acertos++;fb.textContent=ok?"Correto!":"Incorreto.";fb.className="fb "+(ok?"ok":"erro")});
  const res=document.getElementById("resultado");res.textContent=`Você acertou ${acertos} de ${gabarito.length} questões.`;res.classList.remove("d-none")});
 quiz.addEventListener("reset",()=>{document.querySelectorAll(".fb").forEach(f=>f.textContent="");document.getElementById("resultado").classList.add("d-none")});
}
const form=document.getElementById("contato");
if(form){form.addEventListener("submit",e=>{e.preventDefault();form.classList.add("was-validated");
 if(form.checkValidity()){document.getElementById("ok").classList.remove("d-none");form.reset();form.classList.remove("was-validated")}})}

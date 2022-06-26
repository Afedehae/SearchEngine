var chance = 5;
var limite = 0;
var cancer = [
  'https://www.youtube.com/watch?v=rlkSMp7iz6c',
  'https://www.youtube.com/watch?v=TL470fJMi7w&t=22s',
  'https://www.youtube.com/watch?v=Zc09khxyXfA',
  'https://www.xvideos.com/video67136933/chupando_meu_tio_enquanto_a_esposa_dele_esta_assistindo_tv',
  'https://www.xvideos.com/video69128901/ensinei_o_bluezao_youtuber_a_dar_prazer_pra_atriz_duda_hugnen_-_me_sigam_em_minhas_redes_sociais_instagram_e_twitter_alicehaelxv',
  'https://www.xvideos.com/video65789879/convidei_o_uber_pra_subir_e_ele_me_socou_forte_completo_no_xvideosred_',
  'https://www.xvideos.com/video54606483/alice_hael_dando_uns_pegas_gostosos_com_a_duda_hugnen',
  'https://www.xvideos.com/video66942619/mamando_o_bluezao_ate_ele_gozar',
  'https://www.xvideos.com/video69821577/fiz_um_beijo_grego_no_bluezao_youtuber_-_me_sigam_no_insta_e_no_twitter_alicehaelxv',
  'https://www.xvideos.com/video67908225/gozei_e_soltei_bastante_leitinho_pra_voces_instagram_alicehaelxv',
  'https://www.xvideos.com/video67136325/chupando_o_casado_enquanto_a_esposa_dele_assiste',
  'https://www.xvideos.com/video69129607/tigresavip_aceitou_minha_proposta_de_comer_o_bluezao_com_vibrador_me_siga_em_minhas_outras_redes_sociais_alicehaelxv',
  'https://www.xvideos.com/video66923361/mamando_ate_engolir_todo_o_leitinho_do_bluezao',
  'https://www.xvideos.com/video66807051/hipnotizador_me_fazendo_ter_um_orgasmo_hipnotico_publicamente_sem_sexo',
  'https://www.xvideos.com/video65740033/novinho_dotado_da_favela_me_comeu_gostoso_video_completo_no_xvideosred_',
  'https://www.xvideos.com/video69748697/trans_operada_chupando_e_dando_gostoso_-_me_sigam_no_insta_e_twitter_alicehaelxv',
  'https://www.xvideos.com/video68983887/ninfetinha_kawaii_se_tocando_ao_som_de_pode_leitar_-_segue_la_no_instagram_ou_twitter_alicehaelxv',
  'https://www.xvideos.com/video66705487/pagaram_100_reais_para_o_bluezao_beber_a_propria_porra_e_eu_ajudei_ele_com_isso',
  'https://www.xvideos.com/video69738135/batendo_uma_cheia_de_tesao_pra_aliviar_apos_ser_assaltada_-_me_sigam_no_instagram_e_twitter_alicehaelxv',
  'https://www.xvideos.com/video69748625/compilacao_os_melhores_videos_anal_que_ja_fiz_-_me_siga_no_instagram_e_no_twitter_alicehaelxv',
  'https://www.xvideos.com/video69754879/brincando_com_a_piroca_do_ursinho_pirocudo_-_feat_duda_hugnen_-_me_sigam_no_twitter_e_instagram_alicehaelxv',
  'https://www.xvideos.com/video55850217/alice_hael_brincando_com_seus_peitos_anunciando_sua_volta_para_o_xvideos',
  'https://www.xvideos.com/video69749383/comparando_quem_mama_mais_gostoso_eu_ou_a_tigresavip_-_me_segue_la_no_instagram_e_twitter_alicehaelxv',
  'https://www.xvideos.com/video69757569/me_tocando_bem_gostoso_e_mostrando_como_meu_corpo_mudou_-_me_sigam_no_instagram_e_twitter_alicehaelxv',
  'https://www.xvideos.com/video69748493/compilacao_das_minhas_melhores_mamadas_chupando_pau_e_buceta_-_feat_duda_hugnen_-_segue_no_insta_e_twitter_alicehaelxv',
  'https://www.xvideos.com/video52269211/duda_hugnen_dando_uns_amassos_na_alice_hael_no_video_de_verificacao_para_o_xvideos',
  'https://www.youtube.com/watch?v=4YAkFs3R9GY',
  'https://www.youtube.com/watch?v=xNknOFRfUnA&t=55s',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F0c%2Fb1%2Fee%2F0cb1eeab893355f3de939866ad8feb4d.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6eBjYhcrX5RqVIJF5u4bggHaMc%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e20Gg5u-zseojj-JfqsGDgHaD4%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y75aR8qHoKjTOVHfKMcDkwHaHU%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jsXikjK2Adsn9qgqIh_KxQHaEK%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.f_T5qquNuUcHvvRA29QCnwHaJl%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mOy8vzJuoexnLe6C5HcNAwHaHe%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ma2VNTTLSdFaH-2O6H_bTAHaEK%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6BKbPg5FquuAchIbHY1d-QHaJ3%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d8nL5lJ4dG-Cnq-uupw3rAHaEK%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lGPY40ZtgsebsB4naw9b8QHaEK%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.SNzdh-zkVmZ2dWFnUjv-nwHaEK%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OFoPTT8E-bOPmNixWAnp2AHaG-%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YQxooHCQLmjTVXflPw7rggHaNH%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4Ocp0fi29d4iUWJB6N62sAHaE-%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Wi1x4-EkZ7LI6VkuOpWPvwHaHl%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GpBysU1MHRPSKaTnz336PgHaFj%26pid%3DApi&f=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F0c%2Fb1%2Fee%2F0cb1eeab893355f3de939866ad8feb4d.jpg&f=1&nofb=1',
  'https://rule34.xxx/index.php?page=post&s=view&id=6083542',
  'https://rule34.xxx/index.php?page=post&s=view&id=6102412',
  'https://rule34.xxx/index.php?page=post&s=view&id=5302503',
  'https://www.youtube.com/watch?v=ettaeKZHAwA&t=44s',
  'https://www.youtube.com/watch?v=gf_-9fICq8g',
  'https://www.youtube.com/watch?v=GgDTl3isb1Q',
  'https://www.youtube.com/watch?v=5IsSpAOD6K8'
]
function Hyde(){
  var a = document.getElementById('q').value;
  if(a === '123234345456567678789890'){
    Apagar();
    document.getElementById('xxx').hidden = (false);
  } else if (chance == 5) {
    alert('Não toque na criança')
    --chance;
  } else if (chance == 4) {
    alert('Estou te falando para não mexer na criança')
    --chance;
  } else if (chance == 3) {
    alert('Você está me deixando sem escolhas...')
    --chance;
  } else if (chance == 2) {
    alert('Se você mexer nela de novo, você vai ver');
    --chance;
  } else if (chance == 1) {
    alert('Este é o seu ultimo aviso...');
    --chance;
  } else {
    alert('Eu te disse para não tocar na criança');
    setTimeout(pain(), 1);
  }
}
function pain(){
  var caos = Math.floor(Math.random()*cancer.length);
  window.open(cancer[caos]);
  setTimeout(pain(), 1);
}
function Apagar() {
  document.getElementById('pesquisa').hidden = (true);
  document.getElementById('jogos').hidden = (true);
  document.getElementById('livros').hidden = (true);
  document.getElementById('seriesfilmes').hidden = (true);
  document.getElementById('redessociais').hidden = (true);
  document.getElementById('xxx').hidden = (true);
}

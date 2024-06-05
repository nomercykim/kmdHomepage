import React from 'react';
import SubMenu from '../components/SubMenu';


const wednesdaySubMenuLinks = [
    { label: 'CEO', path: '/wednesday/ceo' },
    { label: '운동선수', path: '/wednesday/athlete' },
    { label: '참고자료', path: '/wednesday/ceo' }
];


export default function Wednesday() {
    return (
        <div className="h-screen overflow-hidden">
            <SubMenu links={wednesdaySubMenuLinks} />
            <div style={{ whiteSpace: 'pre-line' }}>
                {`
                    수요일, CHO(최고건강관리자)를 만나는 날

                    CHO, (Chief Healthcare Officer)
                    CEO들의 건강경영을 돕는 CHO, 최고건강관리자
                    
                    수요일에는 운동하는 CEO들과 프로 스포츠 선수들의 메디컬 체크 및 한의학/오스테오파시적 건강관리를 하는 날입니다. 
                    
                    CEO들은 몸이 망가져 있다
                    
                    ceo들은 자기 자신을 소진하는 경향이 있습니다. 과로와 스트레스 궤양 고혈압 등의 질환 속에서 말이죠. 주변 동료들이 하나둘 쓰러지면 두렵습니다. 과거의 정력적이었던 내가 무기력해지고, 예전같지 못한 그 느낌마저 또 스트레스가 됩니다. 성공을 위해 무언가를 희생하면서까지 노력하는 데에 크게 익숙한 ceo들은 건강관리, 운동 등 계획을 짜고 철저히 지키려고 합니다. 그러나 하면 할수록 안 좋아지고 몸은 회복되지 않습니다. 해럴드 c. 하베인 박사는 전미 개업의협회 총회에서 기업체 이사 176명의 조사 결과를 발표했습니다. 평균연령 44.3세, 즉 45세 이전에 1/3은 심질환 궤양 고혈압으로 스스로의 몸을 망치고 있었습니다. 성공을 위해 얼마나 큰 대가를 치르는지를 생각하면 오히려 성공했다고 할 수 없을 것입니다. 
                    
                    ceo들은 보통의 개개인처럼 다양한 건강 문제를 겪게 됩니다. 그렇지만 그들에게 요구되는 역할의 특성 때문에 그리고 이에 수반되는 높은 수준의 스트레스와 책임감 과로로 인해 다른 사람들보다 다음과 같은 건강문제를 더 쉽게 그리고 더 심하게 겪을 수 있습니다. :
                    심혈관계 질환, 정신과 질환, 근골격계 질환, 소화기계 질환, 수면장애, 만성피로와 떨어진 에너지 레벨 
                    이는 현실적인 것으로 많은 사업가와 ceo들은 주변 동료의 죽음과 중병으로 고생하는 것을 목격하게 됩니다. 또한 날이 갈수록 각종 질환이 발생하고 건강이 악화되는 것을 느끼고 같은 미래가 종착점이 될 것임을 직감하게 됩니다. 
                    
                    Ceo들은 건강관리에 신경 쓰려고 노력을 많이 합니다. 첫 번째로, ceo의 건강 문제는 곧 생산성 하락과 그르친 의사결정으로 이어지고 따라서 실제로 더 큰 이익을 얻는 데에 실패하는 현실적인 문제점 때문입니다. 두 번째는 자기 자신의 건강에 대한 염려, 그리고 이전처럼 정력적인 활동에 제한이 걸릴 때의 실망감과 좌절입니다. 이를 해결하기 위해서, CEO들에게 있어 가장 쉽게 접근할 수 있는 것이 피트니스와 식이입니다. 활동적이든 그렇지 않든, 강한 실행력을 대부분 자질로서 가지고 있는 ceo들은 쉽게 운동에 심취하는 경향이 있는 것 같습니다. 
                    
                    그러나 건강에 있어 성공적인 변화를 이끌어 내는 분은 별로 없습니다. 왜냐하면 무언가 중요한 것을 놓치고 있기 때문입니다. 그들이 놓치고 있는 부분은 바로 신경내분비계의 붕괴, 두 번째, 생체역학적인 붕괴 세번째 순환능력의 저하입니다. 이미 붕괴된 시스템에서는 그 어떠한 것도 이득으로 돌아오지 않습니다. 잘려진 식물의 가지를 물꽂이를 하면 대부분 뿌리를 내고 새로운 가지를 내는 생명력을 가지고 있지만, 만약에 이 식물이 다시 살아날 수 있는 능력을 잃어버린 상태에서는 물꽂이를 하고 비료를 주고 바람을 쐰 들 물러지고 썩기만 합니다. 마찬가지로 우리 몸의 항상성과 건강을 유지시키는 부분들이 붕괴되면 ‘회복되지 않는 몸’이 되어 노력이 효과가 없거나 오히려 해가 되게 됩니다. 이렇게 붕괴시키는 가장 큰 이유는 스트레스와 과로 좌식생활입니다. CEO들은 시스템이 붕괴되어 있어 그들만의 고유한 건강문제를 겪게되는 것입니다. 신경내분비계는 우리에게 주어진 스트레스를 대처하고 회복시킵니다. 적절한 생체역학 기능을 가진 몸, 즉 적절한 체형과 운동패턴은 몸을 적절하게 움직이게 합니다. 적절하게 움직일 때 체액은 순환하고 제 기능을 다하게 됩니다. 그제서야 우리 몸은 ‘회복하는 몸’ 됩니다. 
                    
                    따라서 CEO들은 이러한 것을 되돌리는데 많은 노력을 경주해야 하며, 의학적으로 매우 조심스럽고 정밀하게 접근해야 합니다. 그간 의학분야에서는 이러한 영역으로 접근하는 것을 환자의 의무로 만들고 있습니다. 우리 몸에 대한 책임은 우리에게 있지만, 의사는 그들의 책임을 다하도록 도와줄 의무 또한 가지고 있습니다. 잘 먹고 잘 쉬고 운동하고 잘 자라는 공허한 말 대신 우리 몸이 그렇게 될 수 있게끔 도와주어야 합니다. 
                    
                    또 CEO들은 일반적이지 않은 과도한 스케쥴로 인해 바쁘고 여유가 없습니다. 없는 시간을 쪼개서 하는 운동과 진짜 건강관리, ‘회복될 수 있는 몸’은 어떻게 효율적으로 만들 수 있을까요? 제가 CHO, 최고건강강관리자가 되어서 여러분의 몸경영을 맡아드리겠습니다. 
                    
                    만성적인 스트레스 과로 좌식생활 
                        ANS -> neuroendocrinal (hormon axis) 의 system 붕괴로 자가조절 능력 붕괴
                        Immune/ 근골격계 / 각종 내장기계 / 심혈관계/ 만성염증/ 정신과 문제 등 
                        결코 자가조절이 되지 않으므로 “회복될 수 없는 몸상태” 결국 이 몸은 positive feedback
                        악순환의 고리로 점점 질환이 심화
                        모든 노력이 수포로 돌아가거나 오히려 악영향 가능 
                        (Figure 삽입)
                        Figure에 대한 설명 각 계통별로 어떤 영향과 어떤 vicious circle인지 설명 
                    
                    과거 운동하는 CEO로서 느꼈습니다.
                    
                    운동을 하는데 왜 실제로 더 좋아지는 느낌을 받지 못하지?
                    개운한 느낌은 드는데 이게 자기만족은 아닐까?
                    반드시 더 건강해 져야만 하는데 결과가 실망스럽다.
                    얼마든지 투자할 수 있으니 내 건강을 책임져 주는 전문가가 있으면 좋겠다.
                    예전 같지 않음을 느껴서 시작했는데 점점 더 예전만 못해지는 것 같다. 
                    나이들어서 그런가 싶고 포기할까 싶다.
                    너무나도 바쁘기에 건강관리에 투자할 시간이 없다.
                    주변의 동종업계의 동료들이 흔하게 쓰러지고 있어 두렵다.
                    
                    CEO를 치료하는 한의사로서 느꼈습니다. 
                    
                    스트레스가 너무 많다 : 업무량, 책임, 욕심 especially
                    T/Cratio : low (possibility)
                    Physical activity : low 
                    Rib cage Somatic dysfunction : X-factor
                    Breathing dysfunction 
                    Axial rotational dysfunction 
                    Core activity : low 
                    Visceral circulation : low 
                    Stress hyper-reactivity : high  
                    머리를 많이 씀 : CSF congetion and need for lymphatic drainage
                    
                    그 동안 어떤 치료를 받았습니까?
                    
                        CEO의 건강관리는 주로 면역내과에서 항노화, 만성피로, 간기능회복이라는 이름으로 주사치료가 메인으로 이루어지고 있다. 셀레늄 비타민C 비타민B12 푸르설티아민 마그네슘 글루타치온 티옥트 아미노산 등등을 칵테일 해서 주사를 놓고 있다. 
                        영양제주사로 일시적인 활력을 넣어줄 수는 있지만 육체적인 변화가 이루어질 것이라 기대를 하는 경우는 없다. 즉, “오늘 좀 피곤한데 수액맞아야 겠다”는 느낌이다.
                        주사치료 외에도 주로 미용적인 측면에서 항노화클리닉이 운영되고 있다.
                        미용적인 측면의 항노화에는 CEO들은 크게 관심이 없다. 차라리 미용 자체에 관심이 있는 일부 CEO가 있을 뿐이다. 
                        미용에 초점이 맞춰져 있는 만큼 몸의 기능에는 큰 영향이 없다.
                        도수치료를 포함하는 경우도 많이 있다.
                        CEO를 위한 특별한 도수치료라고 보기 어렵고 일반적인 도수치료를 시행 중
                        즉, 근육에만 초점을 맞춘 도수치료. 신경계 호르몬계 내장계통과 순환 문제점을 해결하기 위한 치료가 없다.
                        CEO의 몸상태를 이해하고 시행하는 경우는 없다.
                        운동치료를 하는 경우가 있다.
                        첫번째로 병원에서 하는 운동치료의 경우 도수치료를 겸해서 근골격계 기능개선에 초점을 맞추고 있다.
                        일반적인 필라테스나 PT는 운동의 필요성을 강조할 뿐 일반적인 운동을 시킨다
                        CEO들은 운동을 해도 잘 안되는 경우가 많다. 
                        한의원에서는 공진단 경옥고 등 한약치료가 주로 이루어지고 있다.
                        자율신경계나 혈액순환 등을 한의학적 관점에서 한약, 침을 이용하여 치료하고 있으나 오스테오파시처럼 직접적인 방식은 아니기에 보완할 수 있음. 
                    
                        HRT 호르몬대체요법 / 스테로이드
                        성장호르몬 테스토스테론 성호르몬 등을 이용한다. 
                        매우 큰 부작용과 미래 건강유지에 관한 불확실성이라는 리스크를 안고 치료
                    
                    CEO들의 건강 시크릿
                    
                    스트레스를 덜고 건강한 뇌만들기 : 스트레스를 덜기 위해서는 스트레스 민감도를 낮추고 뇌의 부하를 줄여주어야만 합니다.   
                        뇌하수체와 관련된 COT는 스트레스 반응을 주관하는 neuroendocrinal axis 회복에 도움을 줄 것입니다. 
                        ANS 와 관련된 것은 아래 서술하겠습니다. 
                    
                        뇌가 건강하기 위해서는 뇌의 노폐물을 제거하는 것이 중요합니다. : 뇌의 순환은 RTM의 정상적인 작동과 PRM에 의존하므로 이를 회복시킵니다. 뇌막은 MMA에 의해 순환을 공급받으며 sinus 들의 순환이 중요하므로 suture 들과 후두골의 움직임 SBS의 움직임을 만들어냅니다. 뇌의 노폐물은 결국 cervical lymphatic chain으로 배출되므로 관련된 경추의 림프노드들과 연부조직들 그리고 흉곽출구부의 부드러운 opening이 필요합니다. 전두엽은 운동 기억과 조합을 담당하고 있으므로 많이 피로해져있을 것입니다. 압박된 frontal을 풀기 위해서는 vault bone전반의 가동성이 확보되어야 합니다.  
                        뇌와 vault bone 의 biodynamic한 움직임은 뇌신경세포 자체의 호흡과 순환에 매우 중요합니다.  
                        육체적인 민감도 또한 낮추어 주면 좋은데 ANS 뿐만 아니라 림프와 혈액의 순환이 중요하므로 전체적인 tone을 다운시키고 biomechanical 측면에서 이상적인 자세와 움직임을 만들어내는 것이 좋습니다. 관절운동학적인 부분 뿐만 아니라 근막의 연결성까지도 보아야만 합니다. 필라테스도 크게 도움이 될 수 있는 부분입니다. 
                    
                    아나볼릭한 몸 만들기 : neuroendnocrinal collapse 를 해결합니다. 그러기 위해서는 교감과 부교감 신경의 안정화가 반드시 필요합니다.
                    
                        부교감신경 안정화 : 
                        juglar foramen과 관련된 테크닉들. 그리고 그렇게 되기 위해서 SBS, cranial base, temporal bone의 dysfunction이 없어야만 합니다. 또한 경/흉추/늑골부의 somatic dysfunction, 주변 연부조직의 이상이 없어야만 합니다. 
                        Sacrum과 관련된 테크닉들 : 천장관절의 안정화와 좌우하지(발과 고관절 등)의 밸런스가 좋아야 하며, presacral 과 주변 visceral lig. 그리고 요추부와 주변근육 장요근 등 연부조직이 안정화 되어 있어야 합니다. 
                        후두골과 천골의 자연스러운 PRM의 움직임 회복이 global 하게 좋아야 합니다. 
                    
                        교감신경 안정화 :
                        교감신경은 늑흉관절에서 시작 되므로 늑흉관절의 움직임과 흉추의 움직임 호흡의 안정화를 위한 횡격막의 이완, 따라서 모든 visceral의 문제가 해결되면 좋습니다. 
                        내장기 교감신경절들의 이완도 필요합니다. 
                        척추의 global한 mobility와 그 quality가 중요합니다. 
                        뇌하수체 시상하부가 위치한 SBS의 release 그리고 관련 RTM,  두개 내부의 순환을 증진시키는 테크닉
                    
                        한약 : 한약은 순수하게 자연으로 얻어진 것으로 자율신경계에 미치는 처방이 이미 많은 연구가 있어왔습니다. 시호 / 용골모려 / 천왕보심단 / 조구등 / 향부자 등은 익히 알려진 좋은 한약재입니다.  
                        검사는 HRV를 이용합니다. 
                        Anabolic 반응은 수면에 의해 활성화되므로 수면을 위한 명상 cardiac coherence를 유튜브를 통해 시청하도록 합니다.  
                        한국은 목욕탕 문화가 발달해 있으므로 냉온수욕도 큰 도움이 될 수 있습니다. 
                     
                    정력적인 몸 만들기 
                        Impotency는 우리 몸이 회복되는 몸이 되면 자연스럽게 따라옵니다. 따라서 neuroendocrinal한 balance와 biodynamic한 balance의 회복을 우선합니다. (자율신경계와 체형, 그리고 움직임)
                        우리가 정력적인 몸 그리고 T/Cratio가 높기 위해서는 운동이 필요한데 1)이 서서히 좋아지고 있다는 가정하에 기본적인 움직임의 회복부터 되어야만 합니다. 운동손상증후군에서 볼 수 있는 잘못된 운동패턴부터 교정이 들어가서 코어를 사용하는 방법, 즉 단단하게 잠그는 것과 부드럽게 연결된 동작을 만드는 것 그리고 잃었던 유연성을 다시 회복 시키는 것이 필요합니다. 
                        그 중에서도 나선선과 외측선 기능선 등 체간의 움직임을 회복 하는 것이 중요합니다. 
                        내장기와 관련된 DFL(deep frontal line)의 회복은 체간 안정성과 체형에서 가장 중요한 부분입니다. DFL은 모든 장막과 내장기 인대와 연계됩니다. VOT는 core에서 핵심이 됩니다. 따라서 오스테오파시 의학은 이를 다루는 유일한 수기요법이면서 운동수행능력을 올려주는 가장 강력한 방법입니다. 
                        고관절 굴곡근의 활성화, X-factor(골반대와 견갑대의 수평면상의 mobility&quality), 발목과 발의 탄력, 만세, 쪼그려앉기, 좌우 경부근육의 balance는 소위 운동수행능력에서 매우 중요한 능력입니다. 
                        CoreX 는 체간과 사지의 운동연결에 큰 도움이 될 것입니다. 
                        자연에서 얻을 수 있는 고용량 IGF-1인 녹용은 아나볼릭을 더 도와줍니다. 
                    운동 노폐물 제거하기 
                        운동 및 건강관리를 하면서도 stressor를 완전하게 제거할 수는 없는 노릇이기에 관리가 필요합니다. 운동을 하고 노폐물과 염증물질, 스트레스는 그때 그때 해결해야 합니다. 
                        림프테크닉들은 노폐물과 염증물질을 제거하여 빠른 회복을 돕고 피로감을 줄여주며 다음에 해야할 운동에 좋은 영향을 줍니다. 
                        CEO들은 그 때 그때 연부조직을 release 하고 관리해야 탄력을 유지할 수 있습니다. 
                        수면을 통한 회복을 위해서 ANS를 이완시켜줍니다. 
                    
                    운동하는 CEO는 CHO가 필요하다
                    
                    Neuroendocrianal 한 접근과 biomechanical 한 접근 그리고 circulation한 접근 방식을 통해서 우리 몸은 충분히 좋아질 수 있다는 것을 알게 되었습니다. 이들은 모든 병의 원인이 될 수 있으며 쉽게 breakdown 되는데도 불구하고 마땅한 치료법이 없다는 것도 알게 되었습니다. 
                    Neuroendocrinal 한 접근방식에서는 아나볼릭 스테로이드와 HRT가 현대의학의 결론이며
                    Biomechanical 한 접근방식에 있어서는 스포츠나 fitness 혹은 무분별한 도수치료뿐이며 의학에서는 잘 보지 않는 부분이거나 환자의 책임으로 돌리는 경우가 많습니다. 
                    Circulation 측면에서는 경구용 처방은 있지만 호흡과 연부조직의 움직임 그리고 somatic에 의한 순환에 대한 개념은 존재하지 않는 듯합니다. 
                    그 외에 모든 항노화와 건강증진에 관한 의학적 치료방식은 대부분, nutrition이나 미용쪽에 초점이 맞추어져 있어 위에 언급한 부분과 상관이 없어 진정으로 건강 증진에 도움이 될 지는 의문스럽습니다. 
                    
                    운동을 매우 좋아하고 운동을 통해 건강을 얻기도 잃기도 해본 과거 CEO이자 현재 한의원의 CEO로서 제가 받고 싶고 제가 하고 싶은 것들이 치료가 되어야 한다고 생각합니다. 그리고 그 극복과정을 함께 나누는 것에 의무감마저 생깁니다. 
                    
                    진짜 건강을 만드는 것은 너무나도 delicate 하고 sophisticated 하고 challenging 하며 realistic한 과정입니다. 이러한 부분에 대한 의학적 이해가 없이 단편적인 정보로만 접근한다면 건강을 만드는 것은 요원한 일입니다. 저는 체형을 교정하는 것도, 좋은 움직임을 만드는 것도, 교감신경을 톤다운 시키는 것도, 근막의 연결성을 만드는 것도 우리 몸이 가지고 있는 신경호르몬적인 조절체계를 회복시키는 것도, 그리고 혈액순환 시키는 것 조차도 항상 이를 메인으로 치료하던 임상 10년 차 한의사에게 조차 어느 것 하나 쉬워 보이지 않습니다. 따라서 그들 스스로가 건강을 챙기는 것은 그리 쉬운 일은 아닌 듯 합니다. 
                    그렇기에, 그들의 건강을 manage해줄 수 있는 CHO가 필요하다고 생각합니다. 
                    
                    프로 스포츠선수도 CHO최고건강관리자가 필요하다 
                    
                    프로 스포츠선수 역시 근골격계 및 신경호르몬계, 순환계통의 메디컬체크 및 헬스케어 관리가 필요합니다. 스포츠선수들은 시즌기를 거치고, TCratio가 매우 낮아지는, 마치 CEO들의 몸상태와 유사하게 됩니다. 신경내분비계 측면의 오버트레이닝이 되는 것입니다. 또한 특정 스포츠의 특정 동작을 연습하면서 불균형이 발생하기 쉬우며, 부상예방을 위해 몸을 늘 최적화시키는 노력이 필요합니다. 
                    
                    그간, 스포츠선수 관리는 대게 영양제와 근골격계에만 초점을 맞추어 있었던 만큼 새로운 접근이 필요합니다. CEO들을 위한 4가지 치료접근방향은 스포츠선수에게도 똑같이 유효합니다. 다만, 해당 스포츠에 맞는 체계적인 접근이 추가되어야 할 것입니다. 
                    
                    현재 관리하고 있는 종목은 다음과 같습니다. : 보디빌딩, 크로스핏, 역도, 골프, 야구, 볼링, 축구 
                    
                    이와 다른 종목을 훈련중인 선수분들은 문의를 주시면 연구 및 프로그램을 만들도록 하겠습니다. 
                `}
            </div>

            <div style={{ whiteSpace: 'pre-line' }}>
                {`
                                        참고문헌	
                    
                                        <<근막경선해부학>>Thomas W. Myers
                                        1. 	<<안정성, 운동 수행능력 향상운동>> Joanne elphinston
                                        2. 	<<척추통증>> Josephine Key
                                        3. 	<<Movement impairment syndrome>> Shirley Sahrmann
                                        4. 	<<Neuroendocrinology: An Integrated Approach>> by Michael Wilkinson and Robert E. Brown
                                        5. 	<<The Neuroendocrine Leydig Cells and their Stem Cell Progenitors, the Pericytes>>by Marco Seandel
                                        6. 	<<Principles of Neuroendocrinology>> edited by Anthony W. Norman and Gregory A. Sawyer
                                        7. 	<<Neuroendocrinology: The Normal Neuroendocrine System>> by P. Michael Conn and Marc E. Freeman
                                        8. 	<<Neuroendocrinology: An Introduction>> by Mitchell Wachtel
                                        9. 	<<Principles of Manual medicine>> Philip E. greenman
                                        10. 	<<Cranial osteopathy; principle and practice>> by Torsten Liem
                                        11. 	<<Craniosacral therapy>> John Upledger
                                        12. 	<<Osteopathic Considerations in Systemic Dysfunction>> by Michael Kuchera William Kuchera
                                        13. 	<<The Philosophy and Mechanical Principles of Osteopathy>> Andrew Taylor Still
                                        14. 	<<Why Zebras don’t get ulcers>> Robert M. Sapolsky
                                        15. 	<<How to stop worrying and Start living>> by Dale carnegie
                                        1.	T/C ratio와 스트레스와의 관계 
                                        Carvalho, L. A., Garner, M., Dew, T., Fazakerley, H., Pariante, C. M., & Antidepressants, A. N. D. (2014). The cortisol awakening response is associated with the cortisol response to psychosocial stress in anxious depression. Acta psychiatrica Scandinavica, 129(5), 368-376. DOI: 10.1111/acps.12223
                                        
                                        Petrowski, K., Wintermann, G. B., Schaarschmidt, M., Bornstein, S. R., Kirschbaum, C., & Steudte-Schmiedgen, S. (2015). Blunted diurnal cortisol activity in primary care patients with depression or anxiety. Journal of affective disorders, 185, 135-141. DOI: 10.1016/j.jad.2015.06.007
                                        
                                        Nakajima, S., Oshio, T., Kaneko, H., Nagata, T., Nakashima, T., & Tsuchiya, K. J. (2018). The cortisol awakening response and stress reactivity in the context of personality: The role of extraversion. Frontiers in psychology, 9, 2166. DOI: 10.3389/fpsyg.2018.02166
                                        
                                        van Ockenburg, S. L., Tak, L. M., Bakker, S. J., Rosmalen, J. G., & Hamer, M. (2019). The cortisol awakening response is not a valid marker for the HPA axis activity in older individuals. Psychoneuroendocrinology, 105, 166-172. DOI: 10.1016/j.psyneuen.2019.03.028
                                        
                                        Hirotsu, C., Tufik, S., & Andersen, M. L. (2021). Cortisol awakening response and testosterone/cortisol ratio are associated with trait anxiety in men. Physiology & Behavior, 238, 113443. DOI: 10.1016/j.physbeh.2021.113443
                                        
                                        2. 테스토스테론과 성격과의 관계
                                        Carré, J. M., & McCormick, C. M. (2010). In your face: facial metrics predict aggressive behaviour in the laboratory and in varsity and professional hockey players. Proceedings of the Royal Society B: Biological Sciences, 277(1684), 3689-3698. DOI: 10.1098/rspb.2010.0982
                                        
                                        Mehta, P. H., & Josephs, R. A. (2012). Testosterone and power: high testosterone men are more aggressive when their dominance is challenged. Social Psychological and Personality Science, 3(5), 512-520. DOI: 10.1177/1948550611427922
                                        
                                        van der Meij, L., Almela, M., Buunk, A. P., & Salvador, A. (2016). Testosterone and extrapair mating behavior in women. Personality and Individual Differences, 95, 94-99. DOI: 10.1016/j.paid.2016.02.010
                                        
                                        van Honk, J., Schutter, D. J., Bos, P. A., Kruijt, A. W., Lentjes, E. G., Baron-Cohen, S., & Testosterone for Prosocial Behavior, G. (2011). Testosterone administration impairs cognitive empathy in women depending on second-to-fourth digit ratio. Proceedings of the National Academy of Sciences, 108(8), 3448-3452. DOI: 10.1073/pnas.1011891108
                                        
                                        van Anders, S. M., Steiger, J., Goldey, K. L., & Effects of Gendered Behavior, A. N. D. Hormones, Research Group. (2019). Effects of gendered behavior and oxytocin on men's and women's sexual desire. Hormones and Behavior, 110, 65-72. DOI: 10.1016/j.yhbeh.2018.12.003
                                        
                                        3. 만성스트레스가 면역계에 영향을 주어 염증을 일으키는 것
                                        
                                        Miller GE, Chen E, Sze J, et al. A functional genomic fingerprint of chronic stress in humans: blunted glucocorticoid and increased NF-kappaB signaling. J Clin Endocrinol Metab. 2008;93(9):3760-3769. DOI: 10.1210/jc.2007-2427
                                        
                                        Pace TWW, Mletzko TC, Alagbe O, et al. Increased stress-induced inflammatory responses in male patients with major depression and increased early life stress. Am J Psychiatry. 2006;163(9):1630-1633. DOI: 10.1176/ajp.2006.163.9.1630
                                        
                                        Miller AH, Maletic V, Raison CL. Inflammation and its discontents: the role of cytokines in the pathophysiology of major depression. Biol Psychiatry. 2009;65(9):732-741. DOI: 10.1016/j.biopsych.2008.11.029
                                        
                                        Maes M, Yirmyia R, Noraberg J, et al. The inflammatory & neurodegenerative (I&ND) hypothesis of depression: leads for future research and new drug developments in depression. Metab Brain Dis. 2009;24(1):27-53. DOI: 10.1007/s11011-008-9118-1
                                        
                                        Howren MB, Lamkin DM, Suls J. Associations of depression with C-reactive protein, IL-1, and IL-6: a meta-analysis. Psychosom Med. 2009;71(2):171-186. DOI: 10.1097/PSY.0b013e3181907c1b
                                        
                                        Roth TL, Lubin FD, Funk AJ, Sweatt JD. Lasting epigenetic influence of early-life adversity on the BDNF gene. Biol Psychiatry. 2009;65(9):760-769. DOI: 10.1016/j.biopsych.2008.11.028
                                        
                                        Irwin MR, Miller AH. Depressive disorders and immunity: 20 years of progress and discovery. Brain Behav Immun. 2007;21(4):374-383. DOI: 10.1016/j.bbi.2007.01.010
                                        
                                        Carpenter LL, Gawuga CE, Tyrka AR, Lee JK, Anderson GM, Price LH. Association between plasma IL-6 response to acute stress and early-life adversity in healthy adults. Neuropsychopharmacology. 2010;35(13):2617-2623. DOI: 10.1038/npp.2010.159
                                        
                                        Dantzer R, O'Connor JC, Freund GG, Johnson RW, Kelley KW. From inflammation to sickness and depression: when the immune system subjugates the brain. Nat Rev Neurosci. 2008;9(1):46-56. DOI: 10.1038/nrn2297
                                        
                                        Slavich GM, Irwin MR. From stress to inflammation and major depressive disorder: a social signal transduction theory of depression. Psychol Bull. 2014;140(3):774-815. DOI: 10.1037/a0035302
                                        
                                        4. 수면장애와 몸의 기능 회복 
                                        Killgore, W. D. S., Balkin, T. J., & Wesensten, N. J. (2006). Impaired Decision Making Following 49 H of Sleep Deprivation. Journal of Sleep Research, 15(1), 7–13. https://doi.org/10.1111/j.1365-2869.2006.00499.x
                                        
                                        McHill, A. W., Hull, J. T., McMullan, C. J., Klerman, E. B., & Wright, K. P. (2018). Chronic Insufficient Sleep in Adolescents and Young Adults: An Update on Causes and Consequences. Pediatrics, 142(3), e20181965. https://doi.org/10.1542/peds.2018-1965
                                        
                                        Anderson, K. N., & Bradley, A. J. (2013). Sleep disturbance in mental health problems and neurodegenerative disease. Nature and Science of Sleep, 5, 61–75. https://doi.org/10.2147/NSS.S34842
                                        
                                        Balbo, M., Leproult, R., Van Cauter, E., & Buxton, O. M. (2010). Impact of sleep and its disturbances on hypothalamo-pituitary-adrenal axis activity. International Journal of Endocrinology, 2010, 759234. https://doi.org/10.1155/2010/759234
                                        
                                        Broussard, J. L., Chapotot, F., Abraham, V., Day, A., Delebecque, F., Whitmore, H. R., Tasali, E., & Spiegel, K. (2015). Sleep restriction increases free fatty acids in healthy men. Diabetologia, 58(4), 791–798. https://doi.org/10.1007/s00125-014-3503-z
                                        
                                        Chen, X., & Beydoun, M. A. (2008). Is sleep duration associated with childhood obesity? A systematic review and meta-analysis. Obesity, 16(2), 265–274. https://doi.org/10.1038/oby.2007.63
                                        
                                        Javaheri, S., Redline, S., & Malhotra, A. (2017). Sleep Apnea and Cardiovascular Disease. American Journal of Respiratory and Critical Care Medicine, 195(7), 909–916. https://doi.org/10.1164/rccm.201611-2252PP
                                        
                                        Lim, D. C., Pack, A. I., & Maislin, G. (2010). Effect of sleep apnea on sudden cardiac death, arrhythmias, and myocardial ischemia. Sleep and Breathing, 14(4), 339–347. https://doi.org/10.1007/s11325-010-0336-1
                                        
                                        McKenna, H. P. (1997). Insomnia and depression: an overview. Journal of Psychiatric and Mental Health Nursing, 4(4), 261–267. https://doi.org/10.1046/j.1365-2850.1997.00045.x
                                        
                                        Obal, F., Jr., & Krueger, J. M. (2003). Biochemical regulation of non-rapid-eye-movement sleep. Frontiers in Bioscience, 8,
                                        
                                        Beersma, D. G., & Gordijn, M. C. (2007). Circadian rhythms in the recovery from physical exercise: A review. Chronobiology International, 24(5), 961–981. https://doi.org/10.1080/07420520701662322
                                        
                                        Carrier, J., & Monk, T. H. (2000). Circadian rhythms of performance: New trends. Chronobiology International, 17(6), 719–732. https://doi.org/10.1081/CBI-100101054
                                        
                                        Chtourou, H., Hammouda, O., Souissi, N., Chamari, K., & Chaouachi, A. (2015). The effect of time-of-day and Ramadan fasting on anaerobic performances. International Journal of Sports Medicine, 36(1), 39–44. https://doi.org/10.1055/s-0034-1375677
                                        
                                        Fullagar, H. H., Duffield, R., Skorski, S., Coutts, A. J., Julian, R., & Meyer, T. (2015). Sleep and recovery in team sport: Current sleep-related issues facing professional team-sport athletes. International Journal of Sports Physiology and Performance, 10(8), 950–957. https://doi.org/10.1123/ijspp.2015-0225
                                        
                                        Hauri, P. J. (1997). The sleep disorders. American Journal of Medicine, 103(1), 32S–36S. https://doi.org/10.1016/s0002-9343(97)90006-9
                                        
                                        Lastella, M., Roach, G. D., Halson, S. L., & Martin, D. T. (2015). Sleep/wake behaviours of elite athletes from individual and team sports. European Journal of Sport Science, 15(2), 94–100. https://doi.org/10.1080/17461391.2014.933879
                                        
                                        Maquet, P. (2001). The role of sleep in learning and memory. Science, 294(5544), 1048–1052. https://doi.org/10.1126/science.1062856
                                        
                                        Nedeltcheva, A. V., Kilkus, J. M., Imperial, J., Kasza, K., Schoeller, D. A., & Penev, P. D. (2010). Insufficient sleep undermines dietary efforts to reduce adiposity. Annals of Internal Medicine, 153(7), 435–441. https://doi.org/10.7326/0003-4819-153-7-201010050-00006
                                        
                                        Reilly, T., Waterhouse, J., & Edwards, B. (2007). Altered sleep–wake cycles and physical performance in athletes. Physiology & Behavior, 90(2-3), 274–284. https://doi.org/10.1016/j.physbeh.2006.09.017
                                        
                                        Skein, M., Duffield, R., Edge, J., Short, M. J., Mündel, T., & Plank, L. D. (2011). Intermittent-sprint performance and muscle glycogen after 30 h of sleep deprivation. Medicine & Science in Sports & Exercise, 43(7), 1301
                                        
                                        5. 운동과 수면장애
                                        Altena, E., Van Der Werf, Y. D., Sanz-Arigita, E. J., Voorn, T. A., Rombouts, S. A., Kuijer, J. P., ... & Van Someren, E. J. (2008). Prefrontal hypoactivation and recovery in insomnia. Sleep, 31(9), 1271–1276. https://doi.org/10.5665/sleep/31.9.1271
                                        
                                        Baron, K. G., Reid, K. J., Zee, P. C., & Daviglus, M. L. (2013). Circadian rhythm and health: A position statement. Sleep Medicine, 14(6), 633–637. https://doi.org/10.1016/j.sleep.2013.01.019
                                        
                                        Brand, S., Gerber, M., Beck, J., Hatzinger, M., & Pühse, U. (2010). The relationship between sleep and cognitive performance in young adults: A systematic review. Behavioral Sleep Medicine, 8(1), 16–30. https://doi.org/10.1080/15402001003699919
                                        
                                        Fullagar, H. H., Skorski, S., Duffield, R., Hammes, D., Coutts, A. J., & Meyer, T. (2015). Sleep and athletic performance: The effects of sleep loss on exercise performance, and physiological and cognitive responses to exercise. Sports Medicine, 45(2), 161–186. https://doi.org/10.1007/s40279-014-0260-0
                                        
                                        Jarraya, M. (2016). The impact of physical activity and sleep on physiology and performance in young adults. Sleep Science, 9(2), 97–102. https://doi.org/10.1016/j.slsci.2016.04.005
                                        
                                        Kline, C. E. (2014). The bidirectional relationship between exercise and sleep: Implications for exercise adherence and sleep improvement. American Journal of Lifestyle Medicine, 8(6), 375–379. https://doi.org/10.1177/1559827614524439
                                        
                                        Maquet, P. (2001). The role of sleep in learning and memory. Science, 294(5544), 1048–1052. https://doi.org/10.1126/science.1062856
                                        
                                        Morselli, L. L., Nedeltcheva, A., Leproult, R., & Spiegel, K. (2010). Exercise and sleep. In Principles and Practice of Sleep Medicine (5th ed., pp. 1051–1058). Elsevier Saunders. https://doi.org/10.1016/B978-1-4160-6645-3.00097-8
                                        
                                        Reyner, L. A., & Horne, J. A. (2013). Sleep restriction and serving accuracy in performance tennis players, and effects of caffeine. Physiology & Behavior, 120, 93–96. https://doi.org/10.1016/j.physbeh.2013.07
                                        
                                        6. 스트레스와 유연성
                                        
                                        Gabbett, T. J. (2016). The training—injury prevention paradox: should athletes be training smarter and harder? British Journal of Sports Medicine, 50(5), 273-280. DOI: 10.1136/bjsports-2015-095788
                                        
                                        Epel, E. S., McEwen, B., Seeman, T., Matthews, K., Castellazzo, G., Brownell, K. D., ... & Ickovics, J. R. (2000). Stress and body shape: stress-induced cortisol secretion is consistently greater among women with central fat. Psychosomatic Medicine, 62(5), 623-632. DOI: 10.1097/00006842-200009000-00008
                                        
                                        Nédélec, M., Halson, S., Abaidia, A. E., Ahmaidi, S., & Dupont, G. (2015). Stress, sleep and recovery in elite soccer: a critical review of the literature. Sports Medicine, 45(10), 1387-1400. DOI: 10.1007/s40279-015-0358-z
                                        
                                        Morgan, W. P. (1985). Psychological factors influencing perceived exertion. Medicine and Science in Sports and Exercise, 17(1), 37-41. DOI: 10.1249/00005768-198502000-00008
                                        
                                        Rook, K. S., & Pietromonaco, P. R. (1987). Stressful aspects of close relationships. Journal of Social and Personal Relationships, 4(2), 165-183. DOI: 10.1177/0265407587042002
                                        
                                        Kainz, B., Gumpert, R., & Petrak, A. (2014). Physical workload and musculoskeletal symptoms in the neck and shoulder region among office workers: a cross-sectional study in a German Federal Working Agency. Journal of Occupational Medicine and Toxicology, 9(1), 1-9. DOI: 10.1186/1745-6673-9-14
                                        
                                        Glaser, R., & Kiecolt-Glaser, J. K. (2005). Stress-induced immune dysfunction: implications for health. Nature Reviews Immunology, 5(3), 243-251. DOI: 10.1038/nri1571
                                        
                                        Steptoe, A., & Kivimäki, M. (2013). Stress and cardiovascular disease: an update on current knowledge. Annual Review of Public Health, 34, 337-354. DOI: 10.1146/annurev-publhealth-031912-114452
                                        
                                        Pimentel, M., & Wallace, D. (2006). Diagnosis and management of irritable bowel syndrome. Southern Medical Journal, 99(10), 1098-1106. DOI: 10.1097/01.smj.0000236795.06762.d2
                                        
                                        Carpes, F. P., Reinehr, F. B., & Mota, C. B. (2010). Effects of a high intensity interval training on physical performance and flexibility in healthy people. Journal of Sports Medicine and Physical Fitness, 50(4), 547-553. PMID: 21178962
                                        
                                        7. 스트레스와 오버트레이닝
                                        Lehmann, M., Foster, C., & Keul, J. (1993). Overtraining in endurance athletes: a brief review. Medicine and Science in Sports and Exercise, 25(7), 854-862. DOI: 10.1249/00005768-199307000-00017
                                        
                                        Fry, R. W., Morton, A. R., & Keast, D. (1992). Overtraining in athletes: an update. Sports Medicine, 14(2), 105-114. DOI: 10.2165/00007256-199214020-00004
                                        
                                        Kivimäki, M., Leino-Arjas, P., Luukkonen, R., Riihimäki, H., Vahtera, J., & Kirjonen, J. (2002). Work stress and risk of cardiovascular mortality: prospective cohort study of industrial employees. British Medical Journal, 325(7369), 857-861. DOI: 10.1136/bmj.325.7369.857
                                        
                                        Fry, R. W., Grove, J. R., Morton, A. R., Zeroni, P. M., Gaudieri, S., & Keast, D. (1994). Psychological and immunological correlates of acute overtraining. British Journal of Sports Medicine, 28(4), 241-246. DOI: 10.1136/bjsm.28.4.241
                                        
                                        Selmi, C., Leung, P. S., Sherr, D. H., Diaz, M., & Nyland, J. F. (2003). Chronic fatigue syndrome and occupational stress in a Mexican population. Journal of Occupational and Environmental Medicine, 45(12), 1359-1366. DOI: 10.1097/01.jom.0000105915.99425.87
                                        
                                        Vrijkotte, T. G., van Doornen, L. J., & de Geus, E. J. (2000). Effects of work stress on ambulatory blood pressure, heart rate, and heart rate variability. Hypertension, 35(4), 880-886. DOI: 10.1161/01.hyp.35.4.880
                                        
                                        Meeusen, R., Duclos, M., Foster, C., Fry, A., Gleeson, M., Nieman, D., ... & Urhausen, A. (2013). Prevention, diagnosis, and treatment of the overtraining syndrome: joint consensus statement of the European College of Sport Science and the American College of Sports Medicine. Medicine and Science in Sports and Exercise, 45(1), 186-205. DOI: 10.1249/MSS.0b013e318279a10a
                                        
                                        Halson, S. L. (2014). Monitoring training load to understand fatigue in athletes. Sports Medicine, 44(Suppl 2), S139-S147. DOI: 10.1007/s40279-014-0253-z
                                        
                                        Walsh, N. P., Gleeson, M., Shephard, R. J., Gleeson, M., Woods, J. A., Bishop, N. C., ... & Woods, J. A. (2011). Position statement. Part one: Immune function and exercise. Exercise Immunology Review, 17, 6-63. PMID: 21446352
                                        
                                        7. 스트레스와 cranial dysfunction
                                        
                                        Frymann, V. M. (1967). A study of the rhythmic motions of the living cranium. Journal of the American Osteopathic Association, 66(4), 347-358. DOI: 10.7556/jaoa.1967.67.4.347
                                        
                                        Viola, J. H., King, H. H., & Rogers, F. J. (1995). Craniosacral mechanics and the cervical spine. Journal of the American Osteopathic Association, 95(9), 535-539. DOI: 10.7556/jaoa.1995.95.9.535
                                        
                                        Rogers, J. S., Witt, P. L., Gross, M. T., & Hacke, J. D. (1998). A randomized, controlled trial of craniosacral therapy in the treatment of fibromyalgia. The Journal of Alternative and Complementary Medicine, 4(4), 285-296. DOI: 10.1089/acm.1998.4.285
                                        
                                        Greenman, P. E. (1996). Principles of Manual Medicine (2nd ed.). Lippincott Williams & Wilkins.
                                        
                                        Magoun, H. I. (1951). Osteopathy in the Cranial Field. Journal of the American Osteopathic Association, 51(10), 517-525.
                                        
                                        Heinking, K. P., & Kappler, R. E. (1996). Cranial osteopathic manipulative medicine: a systematic review of the literature. Journal of the American Osteopathic Association, 96(7), 403-412. DOI: 10.7556/jaoa.1996.96.7.403
                                        
                                        Rogers, J. S., Witt, P. L., & Gross, M. T. (1997). Suboccipital decompression enhances heart rate variability indices of cardiac control in healthy subjects. Journal of Alternative and Complementary Medicine, 3(3), 227-230. DOI: 10.1089/acm.1997.3.227
                                        
                                        Reeser, M. (1992). Cranial osteopathy and its role in the treatment of temporomandibular disorders. Journal of the American Osteopathic Association, 92(3), 334-341. PMID: 1568203
                                        
                                        King, H. H. (1998). Cranial osteopathy for children. Journal of the American Osteopathic Association, 98(10), 556-558. PMID: 9792666
                                        
                                        Hanten, W. P., Olson, S. L., Butts, N. L., Nowicki, A. L., & Hanten, D. (2000). Effectiveness of a home program of ischemic pressure followed by sustained stretch for treatment of myofascial trigger points. Physical Therapy, 80(10), 997-1003. PMID: 11002496
                                        
                                        Cohen S, Janicki-Deverts D, Doyle WJ, Miller GE, Frank E, Rabin BS, Turner RB. Chronic stress, glucocorticoid receptor resistance, inflammation, and disease risk. Proceedings of the National Academy of Sciences. 2012 Apr 17;109(16):5995-9.
                                        
                                        Epel ES, McEwen B, Seeman T, Matthews K, Castellazzo G, Brownell KD, Bell J, Ickovics JR. Stress and body shape: stress-induced cortisol secretion is consistently greater among women with central fat. Psychosomatic Medicine. 2000 Nov;62(5):623-32.
                                        
                                        Thoits PA. Stress and health: major findings and policy implications. Journal of Health and Social Behavior. 2010;51(1_suppl):S41-53.
                                        
                                        Mead MN. Benefits of sunlight: a bright spot for human health. Environmental Health Perspectives. 2008 Apr;116(4):A160.
                                        
                                        Vargas-Prada S, Coggon D. Psychological and psychosocial determinants of musculoskeletal pain and associated disability. Best Practice & Research Clinical Rheumatology. 2015 Feb 1;29(1):374-90.
                                        
                                        Goodin BR, Quinn NB, King CD, Page GG, Haythornthwaite JA. Experimental pain sensitivity is inversely related to regional gray matter density in the brain. Pain. 2013 Apr 1;154(4):601-7.
                                        
                                        Levine S. Developmental determinants of sensitivity and resistance to stress. Psychoneuroendocrinology. 2005 Jan 1;30(10):939-46.
                                        
                                        Larsson B, Grooten WJ, Björk J, Brulin C. Pain and soft tissue trauma in RSI from a psychosomatic perspective. Journal of Psychosomatic Research. 1993 Jan 1;37(2):155-65.
                                        
                                        McEwen BS. Protective and damaging effects of stress mediators. New England Journal of Medicine. 1998 Jan 15;338(3):171-9.
                                        
                                        Lederman E. The fall of the postural-structural-biomechanical model in manual and physical therapies: exemplified by lower back pain. Journal of Bodywork and Movement Therapies. 2011 Apr 1;15(2):131-8.
                                        
                                        8. cranial dysfunction과 ANS
                                        
                                        DOI: 10.1089/acm.2006.12.867
                                        
                                        Citation: Rogers R, Witt PL, Gross MT, Hacke JD. A randomized, controlled trial of craniosacral therapy in the treatment of
                                        chronic neck pain. J Manipulative Physiol Ther. 1998 Oct;21(8):530-5.
                                        
                                        DOI: 10.1016/j.jmpt.2009.11.003
                                        
                                        Citation: Fuentes JP, Armijo-Olivo S, Funabashi M, et al. Enhanced therapeutic alliance modulates pain intensity and
                                        muscle pain sensitivity in patients with chronic low back pain: an experimental controlled study. Phys Ther. 2014;94(4):477-
                                        
                                        DOI: 10.1016/j.ijosm.2011.08.002
                                        
                                        Citation: Büssing A, Perrar KM, Föller-Mancini A, et al. Osteopathic manipulative therapy in women with irritable bowel
                                        syndrome: results of a randomized controlled trial. J Altern Complement Med. 2012;18(7):668-677.
                                        
                                        DOI: 10.1016/j.jbmt.2018.04.010
                                        
                                        Citation: Moreno-Lorenzo C, Palomeque-Del-Cerro L, Meseguer-Henarejos AB, et al. Influence of osteopathic cranial
                                        manipulation on autonomic nervous system activity: a systematic review of the literature. Int J Osteopath Med.
                                        2020;35:29-39.
                                        
                                        DOI: 10.1016/j.ijosm.2019.09.002
                                        
                                        Citation: Olney CM, Cramer H. The effects of osteopathic treatment on psychosocial factors in people with persistent
                                        pain: a systematic review. Int J Osteopath Med. 2019;34:51-62.
                                        
                                        9. cranial dysfunction과 csf순환장애
                                        DOI: 10.2519/jospt.2014.5021
                                        Citation: Wong JD, Kistemaker DA, Wong DC, et al. Cervical cerebrospinal fluid pressure in head and neck injury: a
                                        review. J Orthop Sports Phys Ther. 2014;44(10):775-785.
                                        
                                        DOI: 10.1016/j.jbmt.2018.06.011
                                        Citation: Page MJ, Green S, Kramer S, et al. Manual therapy and exercise for neck pain: a systematic review. J Bodyw
                                        Mov Ther. 2018;22(1):205-222.
                                        
                                        DOI: 10.1089/acm.2016.0131
                                        Citation: Gudavalli MR, Gallagher B, Lingreen R, Long CR. Cerebrospinal fluid biomarkers and improvement after
                                        cranial osteopathy in a patient with chronic traumatic brain injury: a case report. J Altern Complement Med.
                                        2016;22(10):823-827.
                                        
                                        10. cranial dysfunction과 ANS
                                        
                                        DOI: 10.1089/acm.2006.12.867
                                        Citation: Rogers R, Witt PL, Gross MT, Hacke JD. A randomized, controlled trial of craniosacral therapy in the treatment of
                                        chronic neck pain. J Manipulative Physiol Ther. 1998 Oct;21(8):530-5.
                                        
                                        DOI: 10.1016/j.jmpt.2010.06.005
                                        Citation: Cerritelli F, Ruffini N, Lacorte E, Vanacore N. Osteopathy for primary headache patients: a systematic
                                        review. J Manipulative Physiol Ther. 2011;34(5):297-304.
                                        
                                        DOI: 10.1016/j.jmpt.2012.05.011
                                        Citation: Büssing A, Perrar KM, Föller-Mancini A, et al. Osteopathic manipulative therapy in women with irritable bowel
                                        syndrome: results of a randomized controlled trial. J Altern Complement Med. 2012;18(7):668-677.
                                        
                                        11. 좌식생활과 자세 
                                        Kwon Y, Ju S. Relationship between sitting time and postural alignment in university students. J Phys Ther Sci. 2015;27(7):2213-2215. doi:10.1589/jpts.27.2213
                                        
                                        Kim JS, Kim JS. The relationship between time spent sitting and the degree of rounding of shoulders and forward head posture in office workers. J Phys Ther Sci. 2016;28(11):3186-3189. doi:10.1589/jpts.28.3186
                                        
                                        Kim Y, Wilkens LR, Park SY, Goodman MT, Monroe KR, Kolonel LN. Association between various sedentary behaviours and all-cause, cardiovascular disease and cancer mortality: the Multiethnic Cohort Study. Eur J Prev Cardiol. 2019;26(10):1059-1066. doi:10.1177/2047487319840325
                                        
                                        Lee J, Park S, Kim Y, Lee T. The impact of occupational sedentary behaviour on neck and shoulder posture in female office workers. J Occup Health. 2019;61(1):24-30. doi:10.1539/joh.18-0158-OA
                                        
                                        Kim K, Kim Y, Kim D, Lee J. Relationship between lumbar lordosis and sedentary behaviour in female office workers. J Back Musculoskelet Rehabil. 2017;30(5):1009-1013. doi:10.3233/BMR-169690
                                        
                                        Yoo WG. Relationship between the sitting position and the cervical range of motion. J Phys Ther Sci. 2014;26(2):283-285. doi:10.1589/jpts.26.283
                                        
                                        Lee J, Park S, Kim Y, Lee T. The impact of occupational sedentary behaviour on neck and shoulder posture in female office workers. Int J Occup Saf Ergon. 2019;25(4):558-564. doi:10.1080/10803548.2017.1423084
                                        
                                        Choi YH, Kim SH, Lee DJ, Jeon H, Kim YS. Relationship between sedentary behavior and postural alignment in young male adults. J Phys Ther Sci. 2017;29(10):1829-1832. doi:10.1589/jpts.29.1829
                                        
                                        Yoo WG. Relationship between sitting position and cervical and lumbar lordosis. J Phys Ther Sci. 2013;25(6):727-728. doi:10.1589/jpts.25.727
                                        
                                        Lee J, Park S, Kim Y, Lee T. The impact of occupational sedentary behaviour on neck and shoulder posture in female office workers. J Phys Ther Sci. 2019;31(10):839-842. doi:10.1589/jpts.31.839
                                        
                                        12 좌식생활과 근막기능부전
                                        Langevin HM, Fox JR, Koptiuch C, Badger GJ, Greenan-Naumann AC, Bouffard NA, Konofagou EE, Lee WN. Reduced thoracolumbar fascia shear strain in human chronic low back pain. BMC Musculoskelet Disord. 2011;12:203. doi:10.1186/1471-2474-12-203
                                        
                                        Schleip R, Naylor IL, Ursu D, Melzer W, Zorn A, Wilke HJ, Lehmann-Horn F. Passive muscle stiffness may be influenced by active contractility of intramuscular connective tissue. Med Hypotheses. 2006;66(1):66-71. doi:10.1016/j.mehy.2005.08.017
                                        
                                        Stecco C, Macchi V, Stecco A, Porzionato A, Ann Day J, Delmas V, De Caro R. Anatomical study of myofascial continuity in the anterior region of the upper limb. J Bodyw Mov Ther. 2009;13(1):53-62. doi:10.1016/j.jbmt.2007.12.001
                                        
                                        Ma SY, Jeong S, Kim SH. Effects of passive stretching on fascial viscosity and stiffness in a rat model. J Phys Ther Sci. 2016;28(2):555-559. doi:10.1589/jpts.28.555
                                        
                                        Davis DS, Ashby P, McCale KL, McQuain JA, Wine JM. The relationship between patellar alignment and patellofemoral joint contact area: an in vitro biomechanical study. J Orthop Sports Phys Ther. 2002;32(2):71-79. doi:10.2519/jospt.2002.32.2.71
                                        
                                        Langevin HM, Stevens-Tuttle D, Fox JR, Badger GJ, Bouffard NA, Krag MH, Wu J, Henry SM, Konofagou EE, Langevin SM. Ultrasound evidence of altered lumbar connective tissue structure in human subjects with chronic low back pain. BMC Musculoskelet Disord. 2009;10:151. doi:10.1186/1471-2474-10-151
                                        
                                        Ma SY, Jeong S, Kim SH. Effects of passive stretching on fascial viscosity and stiffness in a rat model. J Phys Ther Sci. 2016;28(2):555-559. doi:10.1589/jpts.28.555
                                        
                                        Yang H, Lu C, Ma S, Liu X. Effects of stretching on the mechanical properties of the plantar fascia in a rat model. J Phys Ther Sci. 2014;26(1):1-4. doi:10.1589/jpts.26.1
                                        
                                        Wilke J, Schleip R, Klingler W, Stecco C. The role of fascia in manual therapy. J Bodyw Mov Ther. 2019;23(2):248-255. doi:10.1016/j.jbmt.2018.06.007
                                        
                                        Schleip R, Klingler W, Lehmann-Horn F. Active fascial contractility: Fascia may be able to contract in a smooth muscle-like manner and thereby influence musculoskeletal dynamics. Med Hypotheses. 2005;65(2):273-277. doi:10.101
                                        
                                        13. 좌식생활과 심혈관계 문제
                                        Patel AV, Bernstein L, Deka A, Feigelson HS, Campbell PT, Gapstur SM, Colditz GA, Thun MJ. Leisure time spent sitting in relation to total mortality in a prospective cohort of US adults. Am J Epidemiol. 2010;172(4):419-429. doi:10.1093/aje/kwq155
                                        
                                        Knaeps S, Bourgois JG, Charlier R, Mertens E, Lefevre J, Wijndaele K. Ten-year change in sedentary behaviour, moderate-to-vigorous physical activity, cardiorespiratory fitness and cardiometabolic risk: independent associations and mediation analysis. Br J Sports Med. 2018;52(16):1063-1068. doi:10.1136/bjsports-2016-096903
                                        
                                        Dunstan DW, Howard B, Healy GN, Owen N. Too much sitting—a health hazard. Diabetes Res Clin Pract. 2012;97(3):368-376. doi:10.1016/j.diabres.2012.05.020
                                        
                                        Matthews CE, George SM, Moore SC, et al. Amount of time spent in sedentary behaviors and cause-specific mortality in US adults. Am J Clin Nutr. 2012;95(2):437-445. doi:10.3945/ajcn.111.019620
                                        
                                        Ekelund U, Steene-Johannessen J, Brown WJ, et al. Does physical activity attenuate, or even eliminate, the detrimental association of sitting time with mortality? A harmonised meta-analysis of data from more than 1 million men and women. Lancet. 2016;388(10051):1302-1310. doi:10.1016/S0140-6736(16)30370-1
                                        
                                        Katzmarzyk PT, Church TS, Craig CL, Bouchard C. Sitting time and mortality from all causes, cardiovascular disease, and cancer. Med Sci Sports Exerc. 2009;41(5):998-1005. doi:10.1249/MSS.0b013e3181930355
                                        
                                        Gupta N, Zhang Q, Matthan NR, et al. Adherence to a traditional Mediterranean diet is associated with lower abdominal adiposity in a multiethnic population of older adults. J Nutr. 2015;145(4):799-805. doi:10.3945/jn.114.204189
                                        
                                        Hamer M, Coombs N, Stamatakis E. Associations between objectively assessed and self-reported sedentary time with mental health in adults: an analysis of data from the Health Survey for England. BMJ Open. 2014;4(3):e004580. doi:10.1136/bmjopen-2013-004580
                                        
                                        Biswas A, Oh PI, Faulkner GE, et al. Sedentary time and its association with risk for disease incidence, mortality, and hospitalization in adults: a systematic review and meta-analysis. Ann Intern Med. 2015;162(2):123-132. doi:10.7326/M14-1651
                                        
                                        Chomistek AK, Manson JE, Stefanick ML, et al. Relationship of sedentary behavior and physical activity to incident cardiovascular disease: results from the Women’s Health Initiative. J Am Coll Cardiol. 2013;61(23):2346-2354
                                        
                                        14. 좌식생활과 호흡기능
                                        
                                        Thorpe O, Johnston K, Kumar S. Effects of prolonged sitting and physical activity on respiratory muscle activity and oxygen saturation in healthy adult humans. Eur Respir J. 2014;44(Suppl 58):P4396. doi:10.1183/13993003.congress-2014.P4396
                                        
                                        Watz H, Waschki B, Boehme C, Claussen M, Meyer T, Magnussen H. Physical activity and increased risk of chronic obstructive pulmonary disease (COPD). Eur Respir J. 2009;34(Suppl 53):413s. doi:10.1183/09031936.00072109
                                        
                                        O’Donnell DE, Laveneziana P. The clinical importance of dynamic lung hyperinflation in COPD. COPD. 2006;3(4):219-232. doi:10.1080/15412550601005022
                                        
                                        Johnson MA, Sharpe GR, Brown PI. Inspiratory muscle training improves cycling time-trial performance and anaerobic work capacity in healthy active men and women. Eur J Appl Physiol. 2007;101(6):761-768. doi:10.1007/s00421-007-0546-9
                                        
                                        McAuley PA, Artero EG, Sui X, et al. The obesity paradox, cardiorespiratory fitness, and coronary heart disease. Mayo Clin Proc. 2012;87(5):443-451. doi:10.1016/j.mayocp.2012.02.013
                                        
                                        Koc F, Korkmaz M. The effect of regular physical activity on respiratory muscle strength and endurance. Eurasian J Pulmonol. 2016;18(2):85-91. doi:10.5152/ejp.2016.17024
                                        
                                        Hill K, Jenkins SC, Philippe DL, Cecins NM, Shepherd KL, Green DJ. High-intensity inspiratory muscle training in COPD. Eur Respir J. 2006;27(6):1119-1128. doi:10.1183/09031936.06.00066305
                                        
                                        Puhan MA, Busching G, Schunemann HJ, VanOort E, Zaugg C, Frey M. Interval versus continuous high-intensity exercise in chronic obstructive pulmonary disease: a randomized trial. Ann Intern Med. 2006;145(11):816-825. doi:10.7326/0003-4819-145-11-200612050-00005
                                        
                                        Chen YW, Camp PG, Coxson HO, et al. A pilot study to determine the short-term effects of different exercise modalities on peripheral muscle oxygenation in chronic obstructive pulmonary disease. J Cardiopulm Rehabil Prev. 2012;32(4):217-225. doi:10.1097/HCR.0b013e31824bd3dc
                                        
                                        Skinner JS, Steinhafel NK, Weldy DL, et al. Effect of exercise on the diaphragm muscle in the rat. Med Sci Sports Exerc. 2003;35(10):1642-1650. doi:10.1249/01.MSS.0000089328.93160.CC
                                        
                                        15. 림프 순환에 대한 연구
                                        
                                        Tammela, T., & Alitalo, K. (2010). Lymphangiogenesis: Molecular mechanisms and future promise. Journal of Vascular Research, 47(Suppl 1), 174-180. doi:10.1159/000319108
                                        
                                        Swartz, M.A. (2001). The physiology of the lymphatic system. Journal of Clinical Investigation, 107(7), 785-791. doi:10.1172/JCI11978
                                        
                                        Trincot, C.E., Xu, Y., Saggar, R., et al. (2019). Impaired lymphatic function in pulmonary hypertension. Journal of the American Heart Association, 8(17), e012555. doi:10.1161/JAHA.119.012555
                                        
                                        Aldrich, M.B., Sevick-Muraca, E.M., & Wang, M.D. (2012). Lymphatic function in the healing of chronic wounds. Journal of the American College of Surgeons, 215(3), 379-388. doi:10.1016/j.jamcollsurg.2012.05.020
                                        
                                        Ridner, S.H., Murphy, B., Deng, J., et al. (2017). A randomized clinical trial comparing advanced pneumatic truncal, chest, and arm treatment to arm treatment only in self-care of arm lymphedema. Journal of Clinical Oncology, 35(9), 1003-1011. doi:10.1200/JCO.2016.70.3039
                                        
                                        16. 림프 순환 촉진에 대한 연구
                                        
                                        Loudon, A., Barnett, T., Piller, N., et al. (2017). Yoga management of breast cancer-related lymphoedema: A randomised controlled pilot-trial. Journal of Alternative and Complementary Medicine, 23(9), 700-707. doi:10.1089/acm.2016.0424
                                        
                                        McNeely, M.L., Magee, D.J., Lees, A.W., et al. (2004). The addition of manual lymph drainage to compression therapy for breast cancer related lymphedema: A randomized controlled trial. Journal of the American Osteopathic Association, 104(12), 527-536. doi:10.7556/jaoa.2004.104.12.527
                                        
                                        Schmitz, K.H., Ahmed, R.L., Troxel, A., et al. (2009). Weight lifting in women with breast-cancer-related lymphedema. Journal of Athletic Training, 44(6), 655-662. doi:10.4085/1062-6050-44.6.655
                                        
                                        Stout Gergich, N.L., Pfalzer, L.A., McGarvey, C., et al. (2008). Preoperative assessment enables the early diagnosis and successful treatment of lymphedema. Journal of Rehabilitation Research and Development, 45(6), 883-890. doi:10.1682/JRRD.2007.10.0169
                                        
                                        Ozturk, C.N., Polat, A.V., & Duman, H. (2016). Evaluation of the effects of lymphovenous anastomosis surgery on chronic lymphedema using near-infrared fluorescence lymphatic imaging. Journal of Vascular Surgery, 64(3), 667-674. doi:10.1016/j.jvs.2016.03.438
                                        
                                        17. 좌식생활과 유연성
                                        Reiman MP, Manske RC. The Relationship Between Hip Strength and Trunk Motion in College Cross-Country Runners. International Journal of Sports Physical Therapy. 2012;7(1):1-12. doi:10.1016/j.jmpt.2012.02.006.
                                        
                                        Dianat I, Javadivala Z, Allahverdipour H, Asghari Jafarabadi M. The relationship between occupational factors and musculoskeletal symptoms and job stress in office workers. Journal of Physical Therapy Science. 2014;26(6):991-997. doi:10.1589/jpts.26.991.
                                        
                                        Miller E, Mille ML, Teyhen DS, et al. The effects of exercise on fall risk in older adults with cognitive impairment: a systematic review. Journal of Sports Science and Medicine. 2018;17(1):40-47.
                                        
                                        Anshel MH, Russell KG. Effect of a 10-week stretching program on flexibility and gait in older adults. Journal of Back and Musculoskeletal Rehabilitation. 2008;21(1):19-28. doi:10.3233/BMR-2008-21103.
                                        
                                        Ohtake Y, Nakagaichi M, Fujimoto T, Nakagaichi A, Ohashi Y. The effects of physical activity and exercise on physical function among patients with cardiovascular disease. Journal of Physical Therapy Science. 2017;29(10):1835-1838. doi:10.1589/jpts.29.1835.
                                        
                                        18. 과로의 영향 
                                        
                                        Shimazu, A., Schaufeli, W.B., Kamiyama, K., & Kawakami, N. (2015). Workaholism and well-being among Japanese dual-earner couples: A spillover-crossover perspective. Journal of Occupational Health Psychology, 20(2), 1-12. doi:10.1037/a003855
                                        
                                        Ashizawa, K., Matsuda, T., Yano, E., & Kitamura, F. (2016). Overwork-related disorders in Japan: Recent trends and development of a national policy to promote preventive measures. Journal of Occupational and Environmental Medicine, 58(9), 847-855. doi:10.1097/JOM.0000000000000833
                                        
                                        Schaufeli, W.B., Taris, T.W., & Rhenen, W. van. (2008). Workaholism, burnout, and work engagement: Three of a kind or three different kinds of employee well-being? Journal of Occupational Health Psychology, 13(2), 173-189. doi:10.1037/1076-8998.13.2.173
                                        
                                        Schueller, H., Randler, C., & Vollmer, C. (2015). A short version of the sleep-related behaviors questionnaire (SRBQ-S): Exploratory and confirmatory factor analysis in a student sample. Journal of Sleep Research, 24(3), 309-317. doi:10.1111/jsr.1226
                                        
                                        Greenhaus, J.H., Collins, K.M., & Shaw, J.D. (2003). The relation between work-family balance and quality of life. Journal of Applied Psychology, 88(3), 5-15. doi:10.1037/0021-9010.88.3.510
                                        
                                        19. 과로와 교감신경계
                                        
                                        Szczepańska-Gieracha, J., Pyka, Ł., Zaremba, A., et al. (2018). Autonomic nervous system activity in overworked and non-overworked healthcare professionals. International Journal of Occupational Medicine and Environmental Health, 31(1), 27-36. doi:10.13075/ijomeh.1896.01003
                                        
                                        Haar, J.M., & Russo, M. (2016). Working too much or too little? The gendered experience of overwork and underwork in the United States. Journal of Occupational Health Psychology, 21(3), 279-297. doi:10.1037/a0040099
                                        
                                        Kazemi, R., Haidarimoghadam, R., Motamedzade, M., & Golbabaei, F. (2015). The effect of job stress and work hours on the heart rate variability of taxi drivers in Shiraz, Iran. International Archives of Occupational and Environmental Health, 88(6), 727-735. doi:10.1007/s00420-014-0984-4
                                        
                                        Bukowska, A., & Zarzeczna-Baran, M. (2017). Autonomic nervous system reactivity during overwork: A pilot study. International Journal of Occupational Safety and Ergonomics, 23(2), 274-281. doi:10.1080/10803548.2016.1227738
                                        
                                        Hino, A., Inoue, A., Mafune, K., et al. (2015). Association between long working hours and autonomic nervous system activity among Japanese male white-collar workers. Journal of Occupational Health, 57(1), 20-31. doi:10.1539/joh.14-0209-OA
                                        
                                        20. 좌식생활과 ANS
                                        Saad, M.A., Jovanovic, A., Wittert, G.A., et al. (2015). Effects of lifestyle-induced obesity on autonomic nervous system function. Journal of Clinical Endocrinology and Metabolism, 100(1), 257-262. doi:10.1210/jc.2014-2013
                                        
                                        Thosar, S.S., Bielko, S.L., Mather, K.J., & Johnston, J.D. (2015). Effect of prolonged sitting and breaks in sitting time on endothelial function. International Journal of Behavioral Nutrition and Physical Activity, 12, 21. doi:10.1186/s12966-015-0186-x
                                        
                                        Nakamura, K., Fuchida, Y., Masuda, S., et al. (2014). Association between sedentary time and healthy life years in older Japanese adults. Journal of Hypertension, 32(7), 1406-1412. doi:10.1097/HJH.0000000000000217
                                        
                                        im, M.J., Son, W.M., Park, S.B., et al. (2016). Effects of short-term continuous positive airway pressure on blood pressure and autonomic nervous system activity in hypertensive patients with obstructive sleep apnea. American Journal of Physiology-Heart and Circulatory Physiology, 311(6), H1267-H1276. doi:10.1152/ajpheart.00308.2016
                                        
                                        Aires, N., Selby, V., Bigé, N., et al. (2016). Sympathetic activation in presymptomatic Huntington's disease. International Journal of Cardiology, 222, 527-531. doi:10.1016/j.ijcard.2016.08.263
                                        
                                        20. ANS와 오스테오 파시
                                        Jones KD, Nguyen HX, Goozdich LM, Liptan GL. A randomized controlled trial of osteopathic manipulative treatment for chronic fatigue syndrome. Journal of Manipulative and Physiological Therapeutics. 2013 May;36(4):24-31. DOI: 10.1016/j.jmpt.2013.03.001
                                        
                                        Henley CE, Ivins D, Mills M, Wen FK, Benjamin BA. Osteopathic manipulative treatment and its relationship to autonomic nervous system activity as demonstrated by heart rate variability: a repeated measures study. Journal of Osteopathic Medicine. 2008; 108(6): 267-276. DOI: 10.1515/JOM.2008.035
                                        
                                        Walls SA, Fisher KR. The effects of osteopathic treatment on autonomic activity as measured by heart rate variability. Journal of Bodywork and Movement Therapies. 2013 Apr;17(2):169-76. DOI: 10.1016/j.jbmt.2012.09.002
                                        
                                        Martínez-Segura R, Fernández-de-las-Peñas C, Ruiz-Sáez M, López-Jiménez C, Rodríguez-Blanco C, Pérez-Valiño C. Immediate effects of osteopathic treatment versus therapeutic ultrasound in patients with chronic low back pain: a randomized controlled trial. International Journal of Osteopathic Medicine. 2013 Sep;16(3):119-26. DOI: 10.1016/j.ijosm.2013.01.003
                                        
                                        Figueroa A, Kingsley JD, McMillan V, Panton LB. Resistance exercise training improves heart rate variability in women with fibromyalgia. Journal of Alternative and Complementary Medicine. 2008 Jan-Feb;14(1):109-15. DOI: 10.1089/acm.2007.7093
                                        
                                        Rossberg E, Larsson B, Edelstam G, Dallner A. Improvement of autonomic nervous system function in posttraumatic stress disorder by osteopathic manual therapy: a pilot study. Journal of Osteopathic Medicine. 2008;108(4):175-180. DOI: 10.1515/JOM.2008.026
                                        
                                        Bialosky JE, Bishop MD, Penza CW, Price DD, Robinson ME, George SZ. A randomized sham-controlled trial of a neurodynamic technique in the treatment of carpal tunnel syndrome. Journal of Manipulative and Physiological Therapeutics. 2009;32(3):182-94. DOI: 10.1016/j.jmpt.2009.01.003
                                        
                                        Chaibi A, Tuchin PJ, Russell MB. Manual therapies for migraine: a systematic review. Journal of Headache and Pain. 2011 Oct;12(2):127-33. DOI: 10.1007/s10194-011-0296-6
                                        
                                        Cuccia AM, Caradonna C, Annunziata V, Caradonna D. The influence of osteopathic treatment on the masticatory system: a pilot study. Journal of Bodywork and Movement Therapies. 2009 Jul;13(3):231-8. DOI: 10.1016/j.jbmt.2008.06.005
                                        
                                        Licciardone JC, Kearns CM, King HH. Somatic dysfunction and its association with chronic low back pain, back-specific functioning, and general health:
                                        
                                        21. HPG HPA와 오스테오 파시 
                                        Walls SA, Fisher KR. The effects of osteopathic treatment on the hypothalamic-pituitary-adrenal axis: a systematic review. Journal of Bodywork and Movement Therapies. 2011;15(2):246-58. DOI: 10.1016/j.jbmt.2010.08.005
                                        
                                        Fonder MA, Linz AJ, Smith RP, Davenport TE. The effect of osteopathic manipulative treatment on endocrine function in patients with temporomandibular disorders. Journal of Bodywork and Movement Therapies. 2015 Oct;19(4):672-9. DOI: 10.1016/j.jbmt.2015.02.009
                                        
                                        Martínez-Segura R, Fernández-de-las-Peñas C, Ruiz-Sáez M, López-Jiménez C, Rodríguez-Blanco C, Pérez-Valiño C. Immediate effects of osteopathic treatment versus therapeutic ultrasound in patients with chronic low back pain: a randomized controlled trial. International Journal of Osteopathic Medicine. 2013 Sep;16(3):119-26. DOI: 10.1016/j.ijosm.2013.01.003
                                        
                                        Henley CE, Ivins D, Mills M, Wen FK, Benjamin BA. Osteopathic manipulative treatment and its relationship to autonomic nervous system activity as demonstrated by heart rate variability: a repeated measures study. Journal of Osteopathic Medicine. 2008;108(6):267-276. DOI: 10.1515/JOM.2008.035
                                        
                                        Jones KD, Nguyen HX, Goozdich LM, Liptan GL. A randomized controlled trial of osteopathic manipulative treatment for chronic fatigue syndrome. Journal of Manipulative and Physiological Therapeutics. 2013 May;36(4):24-31. DOI: 10.1016/j.jmpt.2013.03.001
                                        
                                        Licciardone JC, Kearns CM, King HH. Somatic dysfunction and its association with chronic low back pain, back-specific functioning, and general health: a preliminary investigation. Journal of the American Osteopathic Association. 2003 Jan;103(1):47-50. DOI: 10.7556/jaoa.2003.103.1.047
                                        
                                        Teede H, Deeks A, Moran L. Polycystic ovary syndrome: a complex condition with psychological, reproductive and metabolic manifestations that impacts on health across the lifespan. BMC Medicine. 2010 Sep 30;8:41. DOI: 10.1186/1741-7015-8-41
                                        
                                        Johnson SM, Sperber AD, Lichtenstein GR, Alkhatib N, Ezeji-Okoye S, Medvigy K, Bortey E, Siegel A, Wong R, Kochar B. Osteopathic manipulative treatment in women with infertility. Journal of the American Osteopathic Association. 2011 Dec;111(12):730-8.
                                        
                                        Al-Sadi T, Bendiksen B, Fønnebø V. The effect of osteopathic treatment on the menstrual cycle: a pilot study. Journal of Bodywork and Movement Therapies. 2011 Jul;15(3):297-304. DOI: 10.1016/j.jbmt.2010.10.003
                                        
                                        22 오스테오파시와 뇌
                                        Nelson DV, Giovannini S, Morrison C, Smith M, Onifer C. Improved cognitive function and reduced anxiety in healthy adults following a series of osteopathic treatments. Journal of Bodywork and Movement Therapies. 2016;20(3):659-666. DOI: 10.1016/j.jbmt.2015.11.003
                                        
                                        Noll DR, Shores JH, Gamber RG, Herron KM, Swift J Jr. Benefits of osteopathic manipulative treatment for hospitalized elderly patients with pneumonia. Journal of the American Osteopathic Association. 2000 Oct;100(10):776-82. DOI: 10.7556/jaoa.2000.100.10.776
                                        
                                        Chaitow L, DeLany J. Clinical Application of Neuromuscular Techniques, Volume 2: The Lower Body. Churchill Livingstone. 2002.
                                        
                                        Mulrennan S, Vaughan B. Osteopathy in the treatment of adults with traumatic brain injury. Journal of the American Osteopathic Association. 2013 May;113(5):396-402. DOI: 10.7556/jaoa.2013.077
                                        
                                        Castaldo M, Catena A, Chiarotto A, Lopopolo M, Bellomo RG, Patella V, Bucci R, Valentini M. Osteopathic manipulative treatment improves cognitive and functional capacity in fibromyalgia. Journal of Alternative and Complementary Medicine. 2015 Nov;21(11):625-30. DOI: 10.1089/acm.2015.0034
                                        
                                        Boes MK, Bollaert RE, Lin J, Benjamin BA. The effect of osteopathic manipulative treatment on balance and cognitive function in multiple sclerosis: a preliminary study. International Journal of Osteopathic Medicine. 2012;15(1):8-14. DOI: 10.1016/j.ijosm.2011.09.006
                                        
                                        Saggio G, Docimo S, Pilc J, Norton J, Gilliar W. Osteopathic manipulative treatment and pain in patients with post-traumatic stress disorder: a pilot study. Journal of the American Osteopathic Association. 2014 Feb;114(2):80-8. DOI: 10.7556/jaoa.2014.017
                                        
                                        Boes MK, Bollaert RE, Lin J, Benjamin BA. The effect of osteopathic manipulative treatment on chronic pain and cognitive function in patients with fibromyalgia: a pilot study. Journal of Bodywork and Movement Therapies. 2013 Oct;17(4):405-15. DOI: 10.1016/j.jbmt.2013.02.003
                                        
                                        Johnson SM, Kurtz ME. Osteopathic manipulative treatment techniques preferred by contemporary osteopathic physicians. Journal of the American Osteopathic Association. 2003 Oct;103(10):457-60. DOI: 10.7556/jaoa.2003.103.10.457
                                        
                                        Paskowski I, Schneider M, Stevans J, Ventura JM. A hospital-based standardization of osteopathic manipulative therapy for children with tension-type headache. International Journal of Osteopathic Medicine. 2014;17(2):97-104. DOI: 10.1016/j.ijosm.2014.01.002
                                        
                                        23. 오스테오파시와 염증
                                        Fitzcharles MA, Shir Y, Ablin JN, Buskila D, Amital H. Osteopathic manipulative treatment in fibromyalgia: a preliminary study. Journal of the American Osteopathic Association. 2010 Apr;110(4):246-54. DOI: 10.7556/jaoa.2010.110.4.246
                                        
                                        Pizzolorusso G, Turi P, Barlafante G, Cerritelli F, Renzetti C, Cozzolino V, D'Orazio M, Fusilli P, Dicuonzo F. Effects of osteopathic treatment versus static touch on heart rate and oxygen saturation in premature infants: a randomized controlled trial. International Journal of Osteopathic Medicine. 2011 Mar;14(1):13-8. DOI: 10.1016/j.ijosm.2010.11.002
                                        
                                        Lee JH, Lee H, Kim S, Kim Y, Kim M, Lee M, Shin B, Kim M, Ha IH. The effectiveness of core stability exercise and its combination with pelvic floor muscle exercise on low back pain and urinary incontinence in postpartum women: a randomized controlled trial. European Journal of Obstetrics, Gynecology, and Reproductive Biology. 2013 Apr;167(2):205-10. DOI: 10.1016/j.ejogrb.2012.11.023
                                        
                                        Chila AG. Foundations of Osteopathic Medicine. Lippincott Williams & Wilkins. 2011.
                                        
                                        Heiland A, Möckel M, Thiel W, Gantz S, Sievers KW, Kühlkamp V. The effects of osteopathic treatment on psychosocial factors in patients with chronic heart failure: a randomized controlled trial. European Journal of Heart Failure. 2012 Jul;14(7):785-91. DOI: 10.1093/eurjhf/hfs072
                                        
                                        Licciardone JC, Gatchel RJ, Kearns CM, Minotti DE. Depression, somatization, and somatic dysfunction in patients with nonspecific chronic low back pain: results from the OSTEOPATHIC Trial. Journal of the American Osteopathic Association. 2012 Jan;112(1):54-63. DOI: 10.7556/jaoa.2012.112.1.54
                                        
                                        Hakim M, Lane N. Osteopathic considerations in systemic lupus erythematosus. Journal of the American Osteopathic Association. 2008 Jul;108(7):356-63. DOI: 10.7556/jaoa.2008.108.7.356
                                        
                                        Licciardone JC, Brimhall AK, King LN. Osteopathic manipulative treatment for low back pain: a systematic review and meta-analysis of randomized controlled trials. BMC Musculoskeletal Disorders. 2005 Jul 7;6:43. DOI: 10.1186/1471-2474-6-43
                                        
                                        Licciardone JC, Kearns CM, Hodge LM, Bergamini MV. Associations of cytokine concentrations with key osteopathic lesions and clinical outcomes in patients with nonspecific chronic low back pain: results from the OSTEOPATHIC Trial. Journal of the American Osteopathic Association. 2012 Mar;112(3):127-35. DOI: 10.7556/jaoa.2012.112.3.127
                                        
                                        24. 오스테오파시와 림프 순환
                                        
                                        Hodge LM, King HH, Williams AG Jr, Reder SJ, Belavich TG. Abdominal lymphatic pump treatment increases leukocyte count and flux in thoracic duct lymph. Journal of Bodywork and Movement Therapies. 2010 Jul;14(3):243-50. DOI: 10.1016/j.jbmt.2009.06.005
                                        
                                        King HH, Tuckey J, Johnson D, Dyer R, Gudavalli MR, DeVocht JW. A pilot study investigating the effects of lymphatic pump techniques on chronic venous insufficiency. Journal of Bodywork and Movement Therapies. 2010 Oct;14(4):411-8. DOI: 10.1016/j.jbmt.2010.01.001
                                        
                                        Schiff E. The Encyclopedia of Complementary and Alternative Medicine. Checkmark Books. 2004.
                                        
                                        Zuther JE. Lymphedema Management: The Comprehensive Guide for Practitioners. Thieme. 2013.
                                        
                                        Gay RE, Lujan HL, Itzkowitz SH, Fulda KG, Chuckpaiwong B. Osteopathic manipulative treatment in a post-mastectomy patient with lymphedema: a case report. Journal of the American Osteopathic Association. 2009 Mar;109(3):153-7. PMID: 19321879
                                        
                                        25. 오스테오파시와 혈액순환
                                        Kuchera ML, Kuchera WA. Osteopathic Principles in Practice. McGraw Hill Professional. 2010.
                                        
                                        Brimhall AK, King LN, Paulson RM. The effect of osteopathic manipulative treatment on cerebral blood flow in patients with mild traumatic brain injury: a pilot study. Journal of the American Osteopathic Association. 2006 Nov;106(11):607-10. PMID: 17121926
                                        
                                        Tindle HA, Davis RB, Phillips RS, Eisenberg DM. Trends in use of complementary and alternative medicine by US adults: 1997-2002. Alternative Therapies in Health and Medicine. 2005 Nov-Dec;11(6):42-9. PMID: 16320887
                                        
                                        Fitzcharles MA, Shir Y, Ablin JN, Buskila D, Amital H. Osteopathic manipulative treatment in fibromyalgia: a preliminary study. Journal of the American Osteopathic Association. 2010 Apr;110(4):246-54. DOI: 10.7556/jaoa.2010.110.4.246
                                        
                                        Liguori G, Barassi G, Kafetzis I, Focarelli A, Gaddi D, Bertuccioli A, Corbari L, Fossati C, Barassi A. Effects of osteopathic treatment versus static touch on heart rate and oxygen saturation in premature infants: a randomized controlled trial. International Journal of Osteopathic Medicine. 2011 Mar;14(1):13-8. DOI: 10.1016/j.ijosm.2010.11.002
                                        
                                        26. 오스테오파시와 정력
                                        
                                        Fryer G, Field J, Adams J, Osterweis M. The effect of osteopathic treatment on chronic pelvic pain syndrome and erectile dysfunction: a randomized controlled trial. Journal of Bodywork and Movement Therapies. 2005 Jul;9(3):248-55. DOI: 10.1016/j.jbmt.2005.03.002
                                        
                                        Mills MV, Henley CE, Barnes LL, Carreiro JE, Degenhardt BF. The use of osteopathic manipulative treatment as adjuvant therapy in patients with chronic pelvic pain syndrome. Journal of the American Osteopathic Association. 2006 Jun;106(6):337-42. PMID: 16802669
                                        
                                        Siedentopf F, Alivizatos G, Jelic S, Sabitzer H, Kiefer FW. Osteopathic manipulative treatment in patients with diabetes mellitus and peripheral arterial disease: a pilot study. Journal of the American Osteopathic Association. 2013 Nov;113(11):830-40. DOI: 10.7556/jaoa.2013.049
                                        
                                        Liu J, Zhu Q, Chang Y, Han X, Qiao Y, Ge Z. Effects of osteopathic manipulative treatment on patients with prostatitis. Journal of Manual and Manipulative Therapy. 2011 Aug;19(3):147-53. DOI: 10.1179/2042618611Y.0000000005
                                        
                                        Liguori G, Barassi G, Kafetzis I, Focarelli A, Gaddi D, Bertuccioli A, Corbari L, Fossati C, Barassi A. Effects of osteopathic treatment versus static touch on heart rate and oxygen saturation in premature infants: a randomized controlled trial. International Journal of Osteopathic Medicine. 2011 Mar;14(1):13-8. DOI: 10.1016/j.ijosm.2010.11.002
                                        
                                        Shaw C, Wincenciak J, Stecco A, Liao W, Stecco C. The effect of osteopathic treatment on sexual dysfunction in men with erectile dysfunction: a pilot study. Journal of Sexual Medicine. 2014 Feb;11(2):492-7
                                        
                                        27. 오스테오파시와 에너지레벨
                                        
                                        Rowe PC, Blount JP, Cheng FY, Kim D, Li K, Stewart JM. Osteopathic manipulative treatment in a subset of patients with chronic fatigue syndrome: an exploratory clinical trial. Journal of the American Osteopathic Association. 2014 Jul;114(7):538-48. DOI: 10.7556/jaoa.2014.109
                                        
                                        Fitzcharles MA, Shir Y, Ablin JN, Buskila D, Amital H. Osteopathic manipulative treatment in fibromyalgia: a preliminary study. Journal of the American Osteopathic Association. 2010 Apr;110(4):246-54. DOI: 10.7556/jaoa.2010.110.4.246
                                        
                                        Licciardone JC, Gatchel RJ, Kearns CM, Minotti DE. Depression, somatization, and somatic dysfunction in patients with nonspecific chronic low back pain: results from the OSTEOPATHIC Trial. Journal of the American Osteopathic Association. 2012 Jan;112(1):54-63. DOI: 10.7556/jaoa.2012.112.1.54
                                        
                                        Hodge LM, McCarthy MS, Rubinstein HM. Increased lymphatic flow in the thoracic duct during manipulative intervention. Journal of the American Osteopathic Association. 2005 Sep;105(9):447-56. PMID: 16273850
                                        
                                        Shibata S, Fu Q, Bivens TB, Hastings JL, Wang W, Levine BD. Short-term exercise training improves the cardiovascular response to exercise in the postural orthostatic tachycardia syndrome. Journal of the American College of Cardiology. 2012 Nov 6;60(19):1914-9. DOI: 10.1016/j.jacc.2012.06.052
                                        
                                        Henley CE, Ivins D, Mills M, Wen FK, Benjamin BA. Osteopathic manipulative treatment and its relationship to autonomic nervous system activity as demonstrated by heart rate variability: a repeated measures study. Osteopathic Medicine and Primary Care. 2008 Sep 23;2:7. DOI: 10.1186/1750-4732-2-7
                                        
                                        28. 오스테오파시와 운동수행력
                                        
                                        Fryer G, Mudge S, McLaughlin P. The effect of osteopathic treatment on the gait of patients with low back pain: a pilot study. Journal of Bodywork and Movement Therapies. 2002 Apr;6(2):81-6. DOI: 10.1054/jbmt.2001.0209
                                        
                                        Jones A, Hitchen P, Green L, MacCarthy D, McLeod N. The effect of osteopathic treatment on the vertical jump height and power of female basketball players. Journal of Bodywork and Movement Therapies. 2012 Jan;16(1):15-20. DOI: 10.1016/j.jbmt.2011.04.006
                                        
                                        Gamber RG, Shores JH, Russo DP, Jimenez C, Rubin BR. Osteopathic manipulative treatment in conjunction with medication relieves pain associated with fibromyalgia syndrome: results of a randomized clinical pilot project. Journal of the American Osteopathic Association. 2002 Mar;102(3):125-35. PMID: 11926629
                                        
                                        Campion EW, Blacksin MF, Miller B. A study of the immediate and long-term effects of osteopathic treatment on women with menstrual pain. Journal of the American Osteopathic Association. 2006 Dec;106(12):689-96. PMID: 17242455
                                        
                                        Snider KT, Snider EJ, Degenhardt BF, Johnson JC, Kribs JW. Palpatory diagnosis of posterior superior iliac spine dysfunction: an interexaminer reliability study. Journal of Manipulative and Physiological Therapeutics. 2007 Feb;30(2):98-102. DOI: 10.1016/j.jmpt.2006.12.003
                                        
                                        Ruffini N, D'Alessandro G, Cardinali L, Frondaroli F, Cerritelli F. Osteopathic manipulative treatment in the management of non-specific low back pain: a randomized controlled trial. International Journal of Osteopathic Medicine. 2010 Mar;13(1):18-23. DOI: 10.1016/j.ijosm.2009.07.001
                                        
                                        Licciardone JC, Kearns CM, Hodge LM, Bergamini MV, Surratt HL. Osteopathic manual treatment in conjunction with medication relieves pain associated with fibromyalgia syndrome: results of a randomized clinical pilot project. Journal of the American Osteopathic Association. 2002 Jan;102(1):321-5. PMID: 11858235
                                        
                                        Snider KT, Snider EJ, Johnson JC, Degenhardt BF. Interexaminer reliability of osteopathic palpatory diagnostic tests of the lumbar spine: improvements from consensus training. Journal of Manual and Manipulative Therapy. 2006;14(3):152-62. DOI: 10.1179/106698106790819361
                                        
                                        Licciardone JC, Stoll ST, Fulda KG, Russo DP, Siu J, Winn W, Swift J Jr. Osteopathic manipulative treatment for chronic low back pain: a randomized controlled trial. Spine. 2003 Jul 1;28(13):1355-62. DOI: 10.1097/01.BRS.0000067114.52650.1F
                                        
                                        DeStefano LA, Greenman PE, Nixon V. A study of the biomechanical effects of osteopathic treatment of the sacro
                                        
                                        29. 림프순환과 운동수행능력
                                        
                                        Weerapong P, Hume PA, Kolt GS. The mechanisms of massage and effects on performance, muscle recovery and injury prevention. Sports Medicine. 2005;35(3):235-56. DOI: 10.2165/00007256-200535030-00004
                                        
                                        Hinds T, McEwan I, Perkes J, Dawson E, Ball D, George K. Effects of massage on limb and skin blood flow after quadriceps exercise. Medicine and Science in Sports and Exercise. 2004 Feb;36(2):130-9. DOI: 10.1249/01.MSS.0000113478.77490.E9
                                        
                                        Piqueras-Fiszman B, Jaén C, Rovira J. Effects of manual lymphatic drainage on sports injuries. European Journal of Applied Physiology. 2010 Jan;108(1):109-14. DOI: 10.1007/s00421-009-1199-7
                                        
                                        Kraemer WJ, Bush JA, Wickham RB, et al. Influence of compression therapy on symptoms following soft tissue injury from maximal eccentric exercise. Journal of Orthopaedic and Sports Physical Therapy. 2001 May;31(5):282-90. DOI: 10.2519/jospt.2001.31.5.282
                                        
                                        Chevalier X, Jerosch J. Effects of manual lymphatic drainage on pain, swelling and trismus after third molar surgery. Journal of Orofacial Pain. 2001;15(1):56-61. PMID: 11889637
                                        
                                        Siqueira CM, Siqueira SR, Pereira HM, Gurgel LA, de Oliveira LF. Lymphatic drainage in the management of edema in the lower limbs in patients with venous insufficiency. Journal of Vascular Nursing. 2009 Dec;27(4):84-90. DOI: 10.1016/j.jvn.2009.06.005
                `}
            </div>
        </div>
    );
}



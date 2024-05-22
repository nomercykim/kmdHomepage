import React from 'react';
import SubMenu from '../components/SubMenu';

const profileSubMenuLinks = [
    { label: 'Profile', path: '/profile' },
    { label: 'Story', path: '/story' }
];

export default function Profile() {
    return (
        <div>
            <SubMenu links={profileSubMenuLinks} />
            <div style={{ whiteSpace: 'pre-line' }}>
                {`



                    한의사 박아람

                    박아람 
                    한의사     Doctor of Korean medicine(DKM)
                    한국 DO   Diplomate Osteopathy (DO(KR))
                    
                    학교 
                    원광대학교 한의학과 Wonkwang University
                     
                    임상
                    안중보건지소 
                    팽성보건지소
                    인천 바른한의원 대표
                    
                    교육
                    척추신경추나의학회 CIQ 인증강사
                    아시아오스테오파시의학회 강사 
                    
                    나눔
                    미추홀구 사랑봉사단 총무 
                    
                    스토리1 사업을 실패하다 
                    대학생 벤처 열풍이 불던 그 때 IT사업을 시작했고 크게 사업을 성공시켰지만 자만심과 경험부족으로 사업을 보기좋게 말아먹었습니다.
                    그 때 무엇보다 힘들었던 것은 내 사람들이라 여겼던 친구들이 나의 잘못으로 떠나갔던 것이었습니다. 몸과 마음은 지치고 스스로도 어두워졌습니다.
                    이때 경험으로 나는 사업가와 CEO들의 불편한 몸과 공허함, 머릿속에 가득찬 번뇌들이 무엇인지 이해하게 되었습니다. 
                    
                    스토리2 한의학과 운동과의 만남
                    한의대에 입학하게 된 것은 사업실패와도 관련이 많습니다.
                    사업을 다시는 하지 않겠노라고 다짐하고 쉽게 돈을 버는 것처럼 보였던 한의사가 되어 재기를 꿈꾸었습니다.
                    하지만 한의학은 만만치 않았고 가벼운 마음으로 한의대에 들어온 저는 방황하기 시작했습니다.
                    무언가 제 마음을 해소하기 위한 것이 필요했고 그 때 역도, 크로스핏, 마라톤을 시작하게 되었습니다.
                    몸을 움직이고 운동에 전념할 때 만큼은 모든 것을 잊을 수 있었기 때문입니다. 
                    
                    스토리3 학생운동과 운동부상
                    방황하는 동안 학생운동을 하던 선배들을 만날 수 있었습니다.
                    스스로의 삶을 지키고 만들어내는 선배들의 모습이 저에게는 너무 멋있어 보였습니다.
                    동아리에 가입하고 학생운동에 열중하기 시작했습니다. 인문학적인 소양과 세상을 보는 눈은 모두 이때 다 배운 것 같았습니다.
                    학생운동을 하면서 국민 건강에 대해 깊이있게 고민하게 되었고, 그 고민은 한의사로서의 삶을 어떻게 할 것인가에 대한 고민으로 이어졌습니다.
                    이 때 저는 취미로 하던 운동 중에 큰 부상을 입게 됩니다. 
                    
                    스토리4 건강에 대한 열정의 시작 
                    부상을 입게 되면서 몸에 대해 아픔에 대해 알게 되었습니다.
                    과거 제가 CEO를 통해 겪었던 신체적/정신적인 문제가 부상의 단초였음을 깨달았으며,
                    잘못된 운동과 생체역학에 대한 무지가 부상을 만들었다는 것을 깨닫게 됩니다.
                    국민 건강에 대한 고민이 한의사로서의 고민으로 이어지고 결국 제 몸에 대한 고민과 공부로 이어집니다.
                    저는 저와 같은 삶을 살고 있는 이 땅의 많은 분들을 위해 공감하고 치료할 수 있다면 얼마나 좋을지 새로운 열정과 꿈이 생겼습니다. 
                    
                    스토리5 사상의학과 오스테오파시와의 만남
                    졸업하면서 시중에서 하고 있던 강의를 모조리 듣고, 녹취록을 만들고 강의록을 만들었습니다.
                    이 때 저는 지금 하라고 해도 도저히 못할 정도로 열심이었습니다.
                    아마 동기들 중에서는 제가 강의비를 가장 많이 지불한 사람이 아니었을까 생각하고 있습니다.
                    그러던 와중에 사상의학과 오스테오파시를 만나게 됩니다. 사상의학은 병을 보기보다는 사람을 봅니다.
                    개개인은 개성을 가지고 있고 자기만의 방식으로 삶을 살아가며, 몸 역시 자기방식으로 병을 이겨냅니다.
                    그것을 도와주는 것이 사상의학입니다. 오스테오파시는 우리 몸의 자연스러운 자세와 건강한 움직임을 통해
                    자연스러운 순환을 만들어내고 이를 통해 스스로 건강을 지켜내는 힘을 발휘할 수 있도록 도와줍니다. 
                    
                    스토리6 건강에 대한 확신 
                    사업실패가 건강을 해치는 것을 그저 스트레스로만 치부한다면 건강을 위해 우리가 적극적으로 나설 수 있는 것은 아무것도 없습니다.
                    그 때 내가 가지고 있던 우울감은 내 몸을 여러 가지 방식으로 바꾸었습니다.
                    매일 밤 뒤척였던 나는 점점 심장이 크게 그리고 빨리 뛰는 감각이 느껴졌고 식은 땀을 흘리고 열감과 추위가 반복적으로 찾아왔으며,
                    숨쉬기가 답답했고 머릿속이 너무 복잡해 그 어떠한 것도 들어오지 않았습니다.
                    이제 저는 경흉추부위가 구부러지고 어깨는 굽어있게 되었고 지금까지도 여전히 흉추가동성이 떨어져 있으며 소화도 잘 되지 않습니다.
                    이 때 운동은 마음은 편하게 했지만 저에게는 독이 되었습니다.
                    흉추가동성은 운동하는 취미인과 선수들에게는 가장 필요한 능력입니다.
                    이가 부족한 경우 우리는 부상에 쉽게 노출되며, 퍼포먼스는 향상되지 않습니다.  

                    만약 제가 흉추가동성이 확보되었다면 견갑대와 골반대 정렬이 바로 되었다면,
                    이를 통해 순환이 촉진되고 잘 회복할 수 있었다면,
                    사업을 하면서 받았던 스트레스와 고민들과 감정들,
                    그리고 체질개선을 위한 노력이 있었다면 훨씬 더 건강하고 앞으로도 더 건강할 수 있었을 것입니다.  
                    
                    이제는 제 몸을 알고 만드는 방법을 압니다.
                    그러나 이러한 확신을 갖기 까지는 10년이 넘는 공부가 필요했습니다.
                    또한 스스로 내 몸에 대해 분석하고 만드는 것은 너무나도 어렵다는 것을 공부하면서 깨닫게 되었습니다.
                    몸을 바로세우고 체질을 개선하는 것. 그리고 우리 몸을 자연스럽게 만드는 것.
                    누군가의 도움이 필요함을 확신합니다. 그리고 제가 이를 도와주는 조력자가 되고 싶습니다. 
                    
                    스토리6 자연
                    우리 몸도 결국 자연의 일부입니다.
                    자연스럽다는 것은 응당 그래야 하는 것처럼 있는 것을 말합니다.
                    우리 몸이 월래 가지고 있는 힘은 자연의 힘입니다.
                    이것이 잘 발휘되기 위해서는 우리몸을 ‘자연’스럽게 만들어야만 합니다. 
                `}
            </div>
        </div>
    );
}


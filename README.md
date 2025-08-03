# 🌱 Gardner

**Gardner**는 GitHub의 Contribution Graph(일명 "잔디")를 기반으로 **개발 활동 상태를 분석하고 시각화하는 서비스**입니다.  
개발자의 활동 패턴을 "정원 관리"로 표현해, 재미있고 직관적인 피드백을 제공합니다.

## ✨ Features

### 1. 잔디 상태 분석 (Contribution Graph)
- GitHub **GraphQL API**를 활용하여 활동 데이터를 수집
- 분석 데이터:
  - **총 기여도 (Total Contributions)**
  - **활동 공백일 (Streak Gap)**
  - **최대 연속 기록 (Longest Streak)**
  - **기간별 평균 활동량 (Daily/Weekly/Monthly)**
  - **활동 비중 (Commit/PR/Issue 등)**

### 2. 상태 분류 (Activity Patterns)
잔디 데이터를 기반으로 사용자의 활동 상태를 **4가지 패턴**으로 분류합니다:
- **꾸준형 🌱:** 일정 간격으로 지속적 활동  
- **폭발형 🔥:** 특정 기간에 몰아서 집중 활동  
- **휴식형 🌙:** 장기간 활동 공백  
- **간헐형 🎈:** 비정기적 간격의 활동  

→ 각 상태별로 정량 지표와 함께 "분석 리포트"를 제공합니다.

## 📌 Roadmap

- [ ] 상태 분류 로직 구현 (꾸준형/폭발형/휴식형/간헐형)
- [ ] 기간별 트렌드 차트 시각화
- [ ] 최고 기록/공백일 하이라이트 추가
- [ ] 친구 비교 & 랭킹 기능
- [ ] 목표 기반 분석 기능

## 🤝 Contributing

Pull Request는 언제나 환영합니다!
이슈 및 기능 제안은 [Issues](https://github.com/luke0408/gardner/issues)에서 남겨주세요.

## 📜 License

MIT License

## 🌟 About the Name

**"Gardner"** 는 "정원사"를 의미합니다.
작은 개발 활동(Contribution)들이 모여 초록빛 정원을 만들고,
그 속에서 당신의 성장과 활동 패턴을 한눈에 볼 수 있습니다.

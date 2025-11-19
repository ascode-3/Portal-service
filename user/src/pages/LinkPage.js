import React, { useState } from 'react';

// 모달 컴포넌트
const LinkModal = ({ isOpen, onClose, link, onConfirm }) => {
  if (!isOpen) return null;
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px',
      animation: 'fadeIn 0.3s ease'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '450px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* 헤더 영역 */}
        <div style={{
          position: 'relative',
          height: '200px',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
          overflow: 'hidden'
        }}>
          {/* 배경 효과 */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
            `
          }} />
          
          {/* 게임 미리보기 */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={link?.image} 
              alt={link?.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>
          
          {/* 닫기 버튼 */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '36px',
              height: '36px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: '#64748b',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'rotate(90deg)';
              e.currentTarget.style.color = '#ef4444';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'rotate(0deg)';
              e.currentTarget.style.color = '#64748b';
            }}
          >
            ×
          </button>
        </div>
        
        {/* 본문 영역 */}
        <div style={{
          padding: '24px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {link?.title || '제목'}
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}>
            {link?.detailDescription || link?.description || '설명이 없습니다.'}
          </p>

          {/* 통계 카드 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              padding: '16px',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#6366f1',
                marginBottom: '4px'
              }}>
                {link?.category || '과학'}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                과목
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              padding: '16px',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#6366f1',
                marginBottom: '4px'
              }}>
                4분 이내
              </div>
              <div style={{
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                플레이 타임
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              padding: '16px',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#6366f1',
                marginBottom: '4px'
              }}>
                {link?.difficulty || '측정불가'}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                난이도
              </div>
            </div>
          </div>

          {/* 버튼 그룹 */}
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button 
              onClick={onClose}
              style={{
                flex: 1,
                padding: '16px 24px',
                background: 'white',
                color: '#64748b',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              나중에
            </button>
            
            <button 
              onClick={onConfirm}
              style={{
                flex: 1,
                padding: '16px 24px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
              }}
            >
              지금 플레이
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkPage = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [links] = useState([
    { 
      id: 1, 
      title: '충격량 시뮬레이션', 
      description: '물리 시뮬레이션을 통해 충격량을 체험해보세요',
      url: 'https://ascode33.netlify.app/',
      image: '/images/physics images.png',
      // 추가 →
      category: '물리학',
      playTime: '5분 이내',
      difficulty: '중',
      detailDescription: '충격량과 운동량의 관계를 시뮬레이션으로 체험할 수 있습니다'
    },
    { 
      id: 2, 
      title: '지구 테트리스', 
      description: '지구를 주제로 한 재미있는 테트리스 게임',
      url: 'https://and-tetris.web.app/',
      image: '/images/150641.png',
      // 추가 →
      category: '지구과학',
      playTime: '4분 이내',
      difficulty: '상',
      detailDescription: '지구를 주제로 한 재미있는 테트리스 게임'
    },
    { 
      id: 3, 
      title: '원자 실험실', 
      description: '원자 키우기를 체험해보세요',
      url: 'https://word-frame.web.app/',
      image: '/images/KakaoTalk_222.png',
      // 추가 →
      category: '화학',
      playTime: '3분 이내',
      difficulty: '하',
      detailDescription: '원자 모형을 직접 만들어보고 원자의 구조를 학습합니다'
    },
    { 
      id: 4, 
      title: '원자 키우기', 
      description: '원자를 먹고 살아남으세요!',
      url: 'webrun:"C:\\html WebRun\\game\\game.exe"',
      image: '/images/KakaoTalk_111.png',
      // 추가 →
      category: '화학',
      playTime: '10분 이내',
      difficulty: '중',
      detailDescription: '원자를 먹고 성장하면서 원소의 주기율표를 학습합니다'
    }
  ]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif'
    }}>
      {/* 헤더 영역 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '40px 20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: '#667eea',
            color: 'white',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '16px',
            letterSpacing: '0.5px'
          }}>
            SCIENCE EXPERIENCE
          </div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#212529',
            margin: '0 0 12px 0',
            letterSpacing: '-1px'
          }}>
            이과 체험 부스
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6c757d',
            margin: '0',
            lineHeight: '1.6'
          }}>
            통합 과학을 활용한 게임을 직접 체험해보세요
          </p>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {links.map((link) => (
            <div
              key={link.id}
              onClick={() => {
                setSelectedLink(link);
                setIsModalOpen(true);
              }}
              style={{
                cursor: 'pointer',
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                width: '100%',
                height: '180px',
                overflow: 'hidden',
                backgroundColor: '#f8f9fa',
                position: 'relative'
              }}>
                <img 
                  src={link.image} 
                  alt={link.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: link.id === 5 ? '#dee2e6' : '#28a745',
                }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
                  color: '#212529',
                  letterSpacing: '-0.3px'
                }}>
                  {link.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6c757d',
                  margin: 0,
                  lineHeight: '1.5',
                  minHeight: '42px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 푸터 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '32px 20px',
        marginTop: '40px'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0 0 8px 0',
            fontWeight: '500'
          }}>
            총 {links.length}개의 체험 부스
          </p>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0'
          }}>
            더 많은 부스가 준비 중입니다
          </p>
        </div>
      </div>
        
      {/* 모달 컴포넌트 */}
      <LinkModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        link={selectedLink}
        onConfirm={() => {
          if (selectedLink?.url) {
            if (selectedLink.url.startsWith('webrun:')) {
              const link = document.createElement('a');
              link.href = selectedLink.url;
              link.click();
            } else {
              window.open(selectedLink.url, '_blank', 'noopener,noreferrer');
            }
          }
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default LinkPage;